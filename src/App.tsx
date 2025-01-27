import React, { useEffect, useState } from 'react';
import { Heart, Stars, Sparkles, GraduationCap, CheckCircle2, Clock, Award, Camera, Calendar, BookOpen } from 'lucide-react';

import pic1 from './pics1.jpg';
import pic2 from './pics2.jpeg';
import pic3 from './pics3.jpeg';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [daysUntilExam, setDaysUntilExam] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);

    // Calculate days until exam (assuming exam is on April 1, 2024)
    const examDate = new Date('2025-02-11');
    const today = new Date();
    const diffTime = Math.abs(examDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysUntilExam(diffDays);

    return () => clearInterval(timer);
  }, []);

  const memories = [
    {
      url: pic1,
      caption: "Good Marks on your Struggle ❤️"
    },
    {
      url: pic2,
      caption: "Your dedication to E-learning 📚"
    },
    {
      url: pic3,
      caption: "Dreams of becoming a Doctor 🏥"
    }
  ];

  const journeySteps = [
    {
      title: "10th Standard",
      status: "Completed",
      icon: <CheckCircle2 className="text-green-500" />,
      description: "Passed with 84%",
      year: "2023"
    },
    {
      title: "12th Standard",
      status: "Current",
      icon: <Clock className="text-blue-500 animate-pulse" />,
      description: "Coming Soon",
      year: "2025"
    },
    {
      title: "Doctor",
      status: "Future",
      icon: <Award className="text-yellow-500" />,
      description: "Final Goal",
      year: "2030"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-400 opacity-50 animate-float-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
            size={20 + Math.random() * 20}
          />
        ))}
      </div>

      <main className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Hero Section */}
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-rose-600 mb-4 sm:mb-6 animate-pulse">
            Dear Mau Cat 🐱<Heart className="inline-block text-red-500" />
          </h1>
          <div className="flex justify-center gap-2 mb-6 sm:mb-8">
            <Stars className="text-yellow-400 animate-spin-slow" />
            <Sparkles className="text-yellow-400 animate-bounce" />
            <GraduationCap className="text-rose-600 animate-float" />
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl max-w-md mx-auto mb-12 sm:mb-16 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <Calendar className="text-rose-500 animate-pulse" size={24} />
            <h2 className="text-xl sm:text-2xl font-bold text-rose-600">Countdown to Success</h2>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{daysUntilExam}</div>
            <p className="text-gray-600">Days until your exam</p>
            <div className="mt-4 flex justify-center gap-3 sm:gap-4">
              <BookOpen className="text-rose-400 animate-bounce" />
              <p className="text-sm text-gray-500">Every day brings you closer to your dreams! 🌟</p>
            </div>
          </div>
        </div>

        {/* Floating Memories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500"
              onMouseEnter={() => setShowMessage(true)}
              onMouseLeave={() => setShowMessage(false)}
            >
              <img
                src={memory.url}
                alt={memory.caption}
                className="w-full h-48 sm:h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <Camera className="inline-block mr-2" size={20} />
                  <span className="text-sm">{memory.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="mt-12 sm:mt-16 mb-12 sm:mb-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rose-300"></div>
          <div className="relative">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-center mb-12 transition-all duration-1000 ${
                  activeStep === index ? 'scale-105' : 'scale-100'
                }`}
              >
                <div className={`w-full sm:w-1/2 text-center sm:text-right sm:pr-8 mb-4 sm:mb-0 ${index % 2 === 0 ? '' : 'sm:opacity-0'}`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-rose-600">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                  <p className="text-sm text-gray-500">{step.year}</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full border-4 border-rose-400 flex items-center justify-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
                  {step.icon}
                </div>
                <div className={`w-full sm:w-1/2 text-center sm:text-left sm:pl-8 mt-4 sm:mt-0 ${index % 2 === 1 ? '' : 'sm:opacity-0'}`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-rose-600">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                  <p className="text-sm text-gray-500">{step.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-rose-600 mb-4">You're Amazing! 🌟</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              My dearest Mau 💝, as you prepare for your 12th board exams, remember that you are capable of achieving anything you set your mind to 🎯. Your dedication, intelligence, and perseverance inspire me every single day ✨. This is just another stepping stone towards your brilliant future 🌈.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-rose-600 mb-4">Believe in Yourself 💫</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Every hour you spend studying is shaping your tomorrow 📚. I believe in you completely, and I know you'll shine in these exams just like you shine in my life ⭐. Your hard work will definitely pay off, and I'll be here cheering for you every step of the way 🎊.
            </p>
          </div>
        </div>

        {/* Love Note */}
        <div className="mt-12 sm:mt-16 bg-white/90 backdrop-blur-sm p-6 sm:p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto transform hover:scale-102 transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold text-rose-600 mb-4 sm:mb-6 text-center">My Love Note to You 💝</h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Dearest Mau 💖, watching you work so hard towards your goals fills my heart with pride and admiration 🌟. Your determination is truly inspiring, and I want you to know that no matter what happens, I'm here for you 🤗. These exams are important, but they don't define you – your beautiful spirit 🦋, kind heart 💝, and brilliant mind ✨ do.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-4">
            Take deep breaths when you feel overwhelmed 🌸, remember to take breaks ☕, and know that you've got this! Your future is so bright 🌟, and these exams are just one more step towards all your dreams 🎯. I love you and believe in you completely! ❤️
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 text-center pb-6 sm:pb-8">
          <div className="bg-white/80 backdrop-blur-sm py-3 sm:py-4 px-6 sm:px-8 rounded-full inline-block shadow-lg transform hover:scale-105 transition-all duration-300">
            <p className="text-gray-700 text-sm sm:text-base">
              Created with <Heart className="inline-block text-red-500 mx-1 animate-pulse" size={16} /> by your Kittu
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;