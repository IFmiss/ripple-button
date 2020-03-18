module.exports = {
  apps: [
    {
      name: 'ripple-button',
      script: 'npm',
      args: 'dev',
      instances: 'max',
      exec_mode: 'cluster',
      max_memory_restart: '100M',
    }
  ],
}
