import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { GitHub } from '@mui/icons-material'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Customers_Trainings/',
    // base: process.env.NODE_ENV === 'prudoction' ? '/Customers_Trainings/' : '/',
    // build: {
    //   outDir: 'dist',
    // },
  plugins: [react()],
  
})
