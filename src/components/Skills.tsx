
import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Skills: React.FC = () => {
  const [containerRef, isContainerVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  // Technical Skills
  const technicalSkills = [
    { name: "Python", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "Kotlin", proficiency: 80 },
    { name: "React.js", proficiency: 85 },
    { name: "Node.js", proficiency: 75 },
    { name: "Firebase", proficiency: 80 },
    { name: "REST APIs", proficiency: 85 },
    { name: "Android Development", proficiency: 75 },
  ];

  // AI & ML Skills
  const aiMlSkills = [
    { name: "TensorFlow", proficiency: 80 },
    { name: "NLP", proficiency: 70 },
    { name: "Computer Vision", proficiency: 75 },
    { name: "Data Analysis", proficiency: 85 },
    { name: "Gemini API Integration", proficiency: 90 },
  ];

  // Soft Skills
  const softSkills = [
    { name: "Problem-Solving", proficiency: 90 },
    { name: "Collaborative Teamwork", proficiency: 85 },
    { name: "Agile Methodology", proficiency: 75 },
    { name: "Technical Documentation", proficiency: 80 },
  ];

  // Refs for the skill bars
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isContainerVisible) {
      skillRefs.current.forEach((ref, index) => {
        if (ref) {
          const allSkills = [...technicalSkills, ...aiMlSkills, ...softSkills];
          const skill = allSkills[index];
          if (skill) {
            ref.style.width = `${skill.proficiency}%`;
          }
        }
      });
    }
  }, [isContainerVisible, technicalSkills, aiMlSkills, softSkills]);

  const codeSnippets = [
    {
      language: "Python",
      code: `# AI Image Recognition
import tensorflow as tf
from tensorflow.keras import layers, models

def build_cnn_model(input_shape):
    model = models.Sequential()
    model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=input_shape))
    model.add(layers.MaxPooling2D((2, 2)))
    model.add(layers.Conv2D(64, (3, 3), activation='relu'))
    model.add(layers.MaxPooling2D((2, 2)))
    model.add(layers.Conv2D(64, (3, 3), activation='relu'))
    model.add(layers.Flatten())
    model.add(layers.Dense(64, activation='relu'))
    model.add(layers.Dense(10))
    return model

# Create and compile the model
model = build_cnn_model((32, 32, 3))
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])`,
    },
    {
      language: "JavaScript",
      code: `// React Component with Gemini API
import React, { useState } from 'react';

const GeminiChatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const callGeminiAPI = async (prompt) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.gemini.ai/v1/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${process.env.REACT_APP_GEMINI_API_KEY}\`,
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, 
        { role: 'user', content: prompt },
        { role: 'assistant', content: data.response }
      ]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      callGeminiAPI(input);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-list">
        {messages.map((msg, idx) => (
          <div key={idx} className={\`message \${msg.role}\`}>
            {msg.content}
          </div>
        ))}
        {isLoading && <div className="loading">Thinking...</div>}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit" disabled={isLoading}>Send</button>
      </form>
    </div>
  );
};

export default GeminiChatbot;`,
    },
    {
      language: "Kotlin",
      code: `// Android Pincode Validator
package com.example.pincodevalidator

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                PinCodeValidator()
            }
        }
    }
}

@Composable
fun PinCodeValidator(viewModel: PinCodeViewModel = viewModel()) {
    val pinCode = viewModel.pinCode.collectAsState()
    val validationResult = viewModel.validationResult.collectAsState()
    val isLoading = viewModel.isLoading.collectAsState()
    val scope = rememberCoroutineScope()

    Column(
        modifier = Modifier
            .padding(16.dp)
            .fillMaxWidth()
    ) {
        TextField(
            value = pinCode.value,
            onValueChange = { viewModel.setPinCode(it) },
            label = { Text("Enter PIN Code") },
            modifier = Modifier.fillMaxWidth()
        )
        
        Spacer(modifier = Modifier.height(16.dp))
        
        Button(
            onClick = { 
                scope.launch {
                    viewModel.validatePinCode()
                }
            },
            enabled = !isLoading.value && pinCode.value.length == 6,
            modifier = Modifier.fillMaxWidth()
        ) {
            if (isLoading.value) {
                CircularProgressIndicator(
                    color = MaterialTheme.colorScheme.onPrimary,
                    modifier = Modifier.size(24.dp)
                )
            } else {
                Text("Validate")
            }
        }
        
        Spacer(modifier = Modifier.height(16.dp))
        
        validationResult.value?.let { result ->
            Card(
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        text = if (result.isValid) "Valid PIN Code" else "Invalid PIN Code",
                        style = MaterialTheme.typography.titleMedium
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Text("Location: \${result.location ?: 'N/A'}")
                    Text("District: \${result.district ?: 'N/A'}")
                    Text("State: \${result.state ?: 'N/A'}")
                }
            }
        }
    }
}`,
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            My <span className="text-tech-primary">Skillset</span>
          </h2>
          <div className="h-1 w-20 bg-tech-primary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Skills Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Technical Skills */}
            <div className={`glass p-6 rounded-lg border border-gray-700 ${isContainerVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="text-tech-primary mb-4 flex justify-between items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <h3 className="text-xl font-bold">Technical Skills</h3>
              </div>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-tech-accent">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        ref={(el) => {
                          skillRefs.current[index] = el;
                        }}
                        style={{ width: isContainerVisible ? `${skill.proficiency}%` : '0%', transition: 'width 1s ease-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & ML Skills */}
            <div className={`glass p-6 rounded-lg border border-gray-700 ${isContainerVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="text-tech-primary mb-4 flex justify-between items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v1"></path>
                  <path d="M12 7v1"></path>
                  <path d="M12 16v1"></path>
                  <path d="M12 21v1"></path>
                  <path d="M5.24 5.33A9 9 0 0 0 3 12c0 2.49 1.04 4.9 2.86 6.57"></path>
                  <path d="M16.8 20.73A9 9 0 0 0 21 12c0-2.49-1.04-4.9-2.86-6.57"></path>
                  <path d="M5.34 16.86A9 9 0 0 0 12 21c2.49 0 4.9-1.04 6.57-2.86"></path>
                  <path d="M7.14 5.43A9 9 0 0 1 12 3c2.49 0 4.9 1.04 6.57 2.86"></path>
                </svg>
                <h3 className="text-xl font-bold">AI & ML Skills</h3>
              </div>
              <div className="space-y-4">
                {aiMlSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-tech-accent">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        ref={(el) => {
                          skillRefs.current[technicalSkills.length + index] = el;
                        }}
                        style={{ width: isContainerVisible ? `${skill.proficiency}%` : '0%', transition: 'width 1s ease-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className={`glass p-6 rounded-lg border border-gray-700 ${isContainerVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <div className="text-tech-primary mb-4 flex justify-between items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 className="text-xl font-bold">Soft Skills</h3>
              </div>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-tech-accent">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        ref={(el) => {
                          skillRefs.current[technicalSkills.length + aiMlSkills.length + index] = el;
                        }}
                        style={{ width: isContainerVisible ? `${skill.proficiency}%` : '0%', transition: 'width 1s ease-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Snippets */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-6 text-center">
              <span className="text-tech-accent">Code</span> Snippets
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {codeSnippets.map((snippet, index) => (
                <div 
                  key={index} 
                  className={`glass rounded-lg border border-gray-700 overflow-hidden ${isContainerVisible ? 'animate-zoom-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
                >
                  <div className="bg-black/50 p-3 border-b border-gray-700 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm text-gray-400">{snippet.language}</span>
                  </div>
                  <pre className="p-4 scrollbar-thin overflow-x-auto max-h-80">
                    <code className="font-mono text-xs sm:text-sm text-gray-300 whitespace-pre">
                      {snippet.code}
                    </code>
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* Neural Network Visualization */}
          <div 
            className={`glass p-6 rounded-lg border border-gray-700 ${isContainerVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.7s' }}
          >
            <h3 className="text-xl font-bold mb-6 text-center">
              Neural <span className="text-tech-primary">Network</span> Visualization
            </h3>
            <div className="flex justify-center">
              <div className="h-60 w-full max-w-md bg-black/30 rounded-lg border border-gray-700 relative overflow-hidden">
                {/* Input Layer */}
                <div className="absolute h-full" style={{ left: '10%' }}>
                  {Array(5).fill(0).map((_, i) => (
                    <div 
                      key={`input-${i}`} 
                      className="absolute w-4 h-4 rounded-full bg-tech-primary/60"
                      style={{ 
                        top: `${20 + (i * 15)}%`,
                        animation: `pulse-slow 3s infinite ${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Hidden Layer 1 */}
                <div className="absolute h-full" style={{ left: '40%' }}>
                  {Array(7).fill(0).map((_, i) => (
                    <div 
                      key={`hidden1-${i}`} 
                      className="absolute w-3 h-3 rounded-full bg-tech-secondary/60"
                      style={{ 
                        top: `${15 + (i * 10)}%`,
                        animation: `pulse-slow 3s infinite ${i * 0.15 + 0.3}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Hidden Layer 2 */}
                <div className="absolute h-full" style={{ left: '70%' }}>
                  {Array(5).fill(0).map((_, i) => (
                    <div 
                      key={`hidden2-${i}`} 
                      className="absolute w-3 h-3 rounded-full bg-tech-accent/60"
                      style={{ 
                        top: `${20 + (i * 15)}%`,
                        animation: `pulse-slow 3s infinite ${i * 0.2 + 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Output Layer */}
                <div className="absolute h-full" style={{ left: '90%' }}>
                  {Array(3).fill(0).map((_, i) => (
                    <div 
                      key={`output-${i}`} 
                      className="absolute w-4 h-4 rounded-full bg-tech-highlight/60"
                      style={{ 
                        top: `${30 + (i * 20)}%`,
                        animation: `pulse-slow 3s infinite ${i * 0.3 + 0.8}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Neural Connections (SVG) */}
                <svg className="absolute top-0 left-0 w-full h-full">
                  {/* Draw connections from input to hidden1 */}
                  {Array(5).fill(0).map((_, i) => 
                    Array(7).fill(0).map((_, j) => (
                      <line 
                        key={`in-h1-${i}-${j}`} 
                        x1={`${10}%`} 
                        y1={`${20 + (i * 15)}%`}
                        x2={`${40}%`} 
                        y2={`${15 + (j * 10)}%`}
                        stroke="rgba(139, 92, 246, 0.2)"
                        strokeWidth="1"
                      />
                    ))
                  )}
                  
                  {/* Draw connections from hidden1 to hidden2 */}
                  {Array(7).fill(0).map((_, i) => 
                    Array(5).fill(0).map((_, j) => (
                      <line 
                        key={`h1-h2-${i}-${j}`} 
                        x1={`${40}%`} 
                        y1={`${15 + (i * 10)}%`}
                        x2={`${70}%`} 
                        y2={`${20 + (j * 15)}%`}
                        stroke="rgba(79, 70, 229, 0.2)"
                        strokeWidth="1"
                      />
                    ))
                  )}
                  
                  {/* Draw connections from hidden2 to output */}
                  {Array(5).fill(0).map((_, i) => 
                    Array(3).fill(0).map((_, j) => (
                      <line 
                        key={`h2-out-${i}-${j}`} 
                        x1={`${70}%`} 
                        y1={`${20 + (i * 15)}%`}
                        x2={`${90}%`} 
                        y2={`${30 + (j * 20)}%`}
                        stroke="rgba(16, 185, 129, 0.2)"
                        strokeWidth="1"
                      />
                    ))
                  )}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
