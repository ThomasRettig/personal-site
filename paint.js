// CSS Paint API
          CSS.paintWorklet.addModule('./script.js');
          document.documentElement.style.setProperty('--pattern-seed', Math.random() * 10000);