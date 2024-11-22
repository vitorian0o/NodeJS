# Installation Node.js - Windows

1. Download Node.JS from [https://nodejs.org](https://nodejs.org);
   - There are two versions available:
     - **LTS**: Recommended for most users, focused on stability.
     - **Current**: Includes the latest features but may have experimental updates.

2. Run the downloaded executable file and follow the installation steps;

3. After completing the installation, open a shell (e.g., Command Prompt or PowerShell) and execute the following commands:
   ```bash
   node -v
   npm -v
- These commands should display the respective versions of **Node.js** and **npm**.

**Note**:  
If the versions are not displayed, the installation may not have been successful. In this case:

1. Check the system's **Environment Variables** under the `Path`:
  - Ensure that the paths for the `nodejs` installation directory, `nvm`, and `npm` are present.

2. If these paths are missing:
  - Add them manually.
  - Save the changes.
  - Close and reopen the shell.

3. Test the commands again.