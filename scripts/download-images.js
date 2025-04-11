const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    filename: 'neural-network.jpg',
    description: 'Neural Network Visualization'
  },
  {
    url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc',
    filename: 'flashcard.jpg',
    description: 'Study Flashcards'
  },
  {
    url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7',
    filename: 'valentine.jpg',
    description: 'Valentine\'s Day Theme'
  },
  {
    url: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa',
    filename: 'email-classifier.jpg',
    description: 'Email Classification'
  },
  {
    url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69',
    filename: 'solar-magnetogram.jpg',
    description: 'Solar Magnetogram'
  },
  {
    url: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    filename: 'weather-app.jpg',
    description: 'Weather Application'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const filePath = path.join(__dirname, '../public/projects', filename);
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${filename}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      reject(`Error downloading ${filename}: ${err.message}`);
    });
  });
};

const downloadAllImages = async () => {
  const projectsDir = path.join(__dirname, '../public/projects');
  
  // Create projects directory if it doesn't exist
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }

  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(error);
    }
  }
};

downloadAllImages(); 