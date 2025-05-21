
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

interface SocialFrameProps {
  isOpen: boolean;
  url: string;
  onClose: () => void;
}

const SocialFrame: React.FC<SocialFrameProps> = ({ isOpen, url, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  // Reset states when URL changes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setLoadError(false);
    }
  }, [url, isOpen]);

  // Sites that commonly block iframe embedding
  const blockedSites = ['linkedin.com', 'github.com'];
  
  const isBlockedSite = blockedSites.some(site => url.includes(site));

  const handleOpenInNewTab = () => {
    window.open(url, '_blank');
    toast({
      title: "Opening in new tab",
      description: `${url} opened in a new browser tab.`,
    });
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setLoadError(true);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-5xl h-3/4 bg-tech-darker border border-gray-700 overflow-hidden">
        <div className="h-10 bg-gray-800 flex items-center justify-between px-4">
          <p className="text-gray-300 truncate flex-1">{url}</p>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors flex items-center"
          >
            <X size={18} />
          </button>
        </div>
        <CardContent className="p-0 h-[calc(100%-2.5rem)] relative">
          {isBlockedSite ? (
            <div className="flex flex-col items-center justify-center h-full bg-gray-900">
              <p className="text-gray-300 mb-4 text-center px-4">
                {url.includes('linkedin.com') ? 'LinkedIn' : 'GitHub'} doesn't allow embedding in iframes for security reasons.
              </p>
              <Button onClick={handleOpenInNewTab} variant="default">
                Open in New Tab
              </Button>
            </div>
          ) : (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tech-primary"></div>
                </div>
              )}
              {loadError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
                  <p className="text-gray-300 mb-4">Failed to load content.</p>
                  <Button onClick={handleOpenInNewTab} variant="default">
                    Open in New Tab
                  </Button>
                </div>
              )}
              <iframe 
                src={url} 
                className="w-full h-full" 
                title="Social Profile"
                sandbox="allow-scripts allow-same-origin allow-forms"
                loading="lazy"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
              />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialFrame;
