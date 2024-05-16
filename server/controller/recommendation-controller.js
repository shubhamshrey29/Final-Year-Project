import { spawn } from 'child_process';

export const getRecommendations = (req, res) => {
    let userId = req.params.userId;
    userId = userId.toLowerCase();
    console.log(`userId in Node.js script: ${userId}`);
    const pythonProcess = spawn('python', ['F:/GitHub/Final-Year-Project/server/Recommend.py', userId]);

    let data = '';

    pythonProcess.stdout.on('data', (chunk) => {
        data += chunk.toString();
    });

    pythonProcess.on('close', (code) => {
        if (code === 0) {
            try {
                // Parse JSON data received from the Python script
                const recommendations = JSON.parse(data);
                console.log(recommendations);
                // Send recommendations as JSON response
                res.json({ recommendations });
            } catch (error) {
                // Handle JSON parsing errors
                console.error('Error parsing JSON data:', error.message);
                res.status(500).json({ error: 'An error occurred while processing the request.' });
            }
        } else {
            console.error(`Python script exited with code ${code}`);
            res.status(500).json({ error: 'An error occurred while processing the request.' });
        }
    });
};
