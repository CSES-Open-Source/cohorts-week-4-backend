Cohorts Week 4: Counter App Backend

First, create a fork and clone the project from Github:
```sh
git clone https://github.com/CSES-Open-Source/cohorts-week-4-backend.git
```

# PREREQUISITES

## Node.js and npm
---

## Install Node.js (Required for Vite)

Before starting, make sure you have **Node.js v18+** installed.
You can check by running:

```bash
node -v
```

If you see something like `v20.11.1`, you’re ready to continue.
If not, follow the steps below based on your operating system.

---

### macOS Example.

1. **Install Node with Homebrew (recommended)**

   ```bash
   brew install node
   ```

2. **Verify installation**

   ```bash
   node -v
   npm -v
   ```

   You should now see version numbers for both Node and npm.

3. **(Alternative)**
   If you don’t use Homebrew, you can also download Node directly:

   * Go to [https://nodejs.org](https://nodejs.org)
   * Choose **LTS** → macOS Installer (`.pkg`)
   * Follow the on-screen setup wizard

---

### Windows Example

1. **Install Node using the official installer**

   * Visit [https://nodejs.org](https://nodejs.org)
   * Download the **LTS** version (`.msi` file)
   * Run the installer
   * Keep the default options checked — especially **“Add to PATH”**

2. **Verify installation**
   Open a new Command Prompt and run:

   ```bash
   node -v
   npm -v
   ```

   You should see version numbers appear.

3. **(Optional for advanced users)**
   You can also install via [Chocolatey](https://chocolatey.org/install):

   ```bash
   choco install nodejs-lts
   ```

---
## TODOs (flat list)
Below is the flat, ordered list of tasks to implement for this project. Follow these in order.

1. Import express and cors
2. Create express app and define PORT
3. Middleware to parse JSON
4. Enable CORS for frontend application
5. Import mongoose
6. Connect to database
7. Import mongoose in Counter.ts
8. Create Counter Schema
9. Export Counter Model
10. Import necessary modules in routes/counter.ts
11. Create a new router instance
12. Add a GET route to fetch all counters
13. Add a POST route to create a new counter
14. Add a PATCH route to update a counter by ID
15. Add a DELETE route to remove a counter by ID
16. Export router as default
17. Import counter routes in index.ts
18. Add a simple root route
19. Use counter routes
20. Start the server
21. Import axios
22. Create axios instance
23. create loadCounters with api.get
24. create addCounter with api.post
25. create updateCounter with api.patch
26. create deleteCounter with api.delete
27. Edit MongoDB connection string in seed.ts

## Uploading Your Work
To upload your work to your GitHub repository, follow these steps:
### TODO 1: Add Changes
In your terminal, navigate to the root directory of your project (the `your-name` folder)
and run the following command to stage all your changes:
```
```bash
git add .
```

---
### TODO 2: Commit Changes
Next, commit your changes with a descriptive message:
```bash
git commit -m "Add new counter functionality"
```

---
### TODO 3: Push Changes
Finally, push your changes to your GitHub repository:
```bash
git push origin main
```

This will upload your committed changes to the `main` branch of your remote repository on GitHub.

---
# Congrats!
You have successfully completed the React Counter App project! 🎉

