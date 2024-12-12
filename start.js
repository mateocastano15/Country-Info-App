const { spawn } = require('child_process');

// Iniciar frontend
const fe = spawn('npm', ['run', 'dev'], { cwd: './fe', stdio: 'inherit', shell: true });

// Iniciar backend
const be = spawn('npm', ['run', 'start:dev'], { cwd: './be', stdio: 'inherit', shell: true });

fe.on('close', (code) => {
  console.log(`Frontend finalizó con código ${code}`);
});

be.on('close', (code) => {
  console.log(`Backend finalizó con código ${code}`);
});
