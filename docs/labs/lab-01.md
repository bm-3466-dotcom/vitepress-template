---
outline: deep


title: Lab 1 - Set Up Your Development Environment and Revision
---

# Lab 01 - Set Up Your Development Environment and Revision

This lab walks you through setting up **Git** and **VS Code**, then using their graphical interfaces to manage the `class-cp125-repo` on **GitHub**.

---

## Install Git and VS Code

- Follow the [**Git** installation guide](/labs/installation#git) for details on downloading and configuring **Git**.
- Follow the [**VS Code** installation guide](/labs/installation#vs-code) to install the editor.
- In **VS Code**, open the `Extensions` panel and install the **Python** extension from **Microsoft**.

<br>


<p align="center">
    <img src="/labs/lab-01/lab-1-1.png" alt="drawing" width="700"/>
</p>



    

### Forking the Repository

When you fork a repository on **GitHub**, you create a fully independent copy under your own account. The original owner keeps their version; you now control yours and can set permissions, open issues, or adjust settings without affecting the source project.

On **GitHub**, fork the `class-cp125-repo` from this [link](https://github.com/JSK-KML/CP125-Class-Repo.git) by clicking the `Fork` button in **GitHub**. Proceed to the fork, without changing any default options.

<p align="center">
    <img src="/labs/lab-01/lab-1-2.png" alt="drawing" width="400"/>
</p>

After you have done forking the repository, everything that you write is fully yours and only you can control it. So what is the difference between forking and simply copying?

The difference lies in the connection from the original copy. When you copy-paste something like a PDF documents, you have no connection to the original copy, meaning that if the original PDF changes, you will not know and you will not be notified. 

For forking, there are still connections to the original repository, so if the original repository updates, you will be notified and you can update accordingly.


## Cloning Your Repository

Now that you have done forking, the code is fully yours, but it only exists on **GitHub** web server. This is great, however, editing the code online, although feasible, is not a very smooth experience. 

To solve this, we need to clone the repository into your computer so you can edit and run the code using your IDE, which in this class we have chosen **VS Code**.

In your `class-cp125-repo`, click `Code` and copy the link.

<p align="center">
    <img src="/labs/lab-01/lab-1-3.png" alt="drawing" width="400"/>
</p>

Back in **VS Code**, choose `Source Control` from the sidebar and click `Clone repository` and paste the link that you have copied in the box when prompted. Then choose `Clone from URL`.

<p align="center">
    <img src="/labs/lab-01/lab-1-4.png" alt="drawing" width="400"/>
</p>

After finishing that, your **GitHub** account needs to be set up. By `cloning` the repository, you are just copying the code into your own PC, but you need to tell **GitHub** that you are the rightful owner of the code. To do this, you need to use the terminal. Click `Terminal` and then `New Terminal`. 

<p align="center">
    <img src="/labs/lab-01/lab-1-8.png" alt="drawing" width="400"/>
</p>

A new terminal will appear at the bottom of **VS Code**.

<p align="center">
    <img src="/labs/lab-01/lab-1-9.png" alt="drawing" width="400"/>
</p>


In the terminal, use the command below to setup your **GitHub** username and email. Refer back to your **GitHub** account for your username and email, the email is the email that you use for login. Replace `USERNAME` and `EMAIL` with your actual username and email.

```bash
git config --global user.name  "USERNAME"
git config --global user.email "EMAIL"
```

## Commit and Push 

When you have finished cloning the repository, you will see that the folder and file on the computer is exactly like in the **GitHub** web. Now let's try to update our code. In `labs/lab01/exercise.py`, change the code from 

```python
print("Hello, Lab 01")
```

to

```python
print("Hello everyone, Lab 01")
```

By changing the code, even if you add a space, **VS Code** will automatically detects the changes and will allow you to update the online repository that you have in **GitHub**.

On the sidebar, choose the `Source Control` and **VS Code** will automatically show you where the changes have been done. In the message box add appropriate message such as `Change the print in Lab 1` and click `Commit`.

<p align="center">
    <img src="/labs/lab-01/lab-1-5.png" alt="drawing" width="400"/>
</p>

But what exactly is `Commit`? A commit records a snapshot of your changes in the local repository. Each commit carries a unique ID and a message explaining what changed, letting you roll back or review history at any point.

`Push` is the **Git** action that copies your new commits from the local repository on your computer to the remote repository, which in our case is `cp115-class-repo`. Although the button shows `Sync`, behind the scene what it will do is `Push` and `Pull`.

<p align="center">
    <img src="/labs/lab-01/lab-1-6.png" alt="drawing" width="400"/>
</p>

Now go back to your **GitHub** account in the browser. You should see that the repository has been updated with the commit message that you have added.


## Creating Your First Virtual Environment

Before we can start creating our first virtual environment, we need to make sure that we have **Python** installed on our computer. If you have not installed **Python** yet, just search `python` in the Microsoft Store. Make sure to install the latest version of **Python**.

Launch **VS Code** and open your `CP125-Class-Repo` project. By default in VS Code, if you are using Windows, the terminal will be using **PowerShell**. However, since you are using lab's computer, the PowerShell will have some limitation.

Because of that, we will be using **Git Bash** instead. To change the default terminal in **VS Code**:

1. Press `Ctrl` + `Shift` + `P` to open the command palette.
2. Type `Terminal: Select Default Profile` and select `Git Bash`

This will cause the terminal to open with **Git Bash** instead of **PowerShell** by default.


Now create a virtual environment using **Python**'s built-in `venv` module. Type the following command:

```bash
python -m venv cp125_env
```

This creates a new directory called `cp125_env` that contains your isolated **Python** environment. The `python -m venv` command tells **Python** to run the venv module and create a new virtual environment in the specified directory.

You should see a new folder called `cp125_env` appear in your repository root directory. This folder contains a complete **Python** installation that's separate from your system **Python**.

## Activating the Virtual Environment

Creating the virtual environment is just the first step. To actually use it, you need to activate it. Run the command below.

```bash
source cp125_env/Scripts/activate
```

After activation, you should see `(cp125_env)` appear at the beginning of your terminal directory. This indicates that your virtual environment is active and any **Python** commands you run will use this isolated environment.

::: tip
Another good reason why we are using Git Bash instead of PowerShell is because Git Bash uses Linux commands instead of Windows commands. Online documentation almosts always use Linux commands, so it's a good idea to get used to using Linux commands.
:::


## Testing Your Virtual Environment

Let's verify that your virtual environment is working correctly. With the virtual environment activated, type:

```bash
python --version
```

This should show your **Python** version. 

## Creating a Simple Python Program

Create a new file called `test_virtual_env.py` in the `/labs/lab01/` directory. Copy and paste this code.

```python

student_name = "Your Name"
student_id = "Your ID"
course_code = "CP125"

print(student_name)
print(student_id)
print(course_code)

```

Run this program to make sure it works:


## Deactivating the Virtual Environment

When you're done working in your virtual environment, you can deactivate it by simply typing:

```bash
deactivate
```

The `(cp125_env)` prefix should disappear from your terminal prompt, indicating that you're back to using your system **Python** installation.

::: tip
Always activate your virtual environment before working on your project, and deactivate it when you're done. This ensures you're working in the correct, isolated environment.
:::

## Testing Python Code in VS Code

### Installing the Python Test Explorer Extension

Testing is a crucial part of professional software development. It helps you verify that your code works correctly and continues to work as you make changes. **VS Code** has excellent support for **Python** testing through extensions.

Open **VS Code** and go to the Extensions panel by clicking the Extensions icon in the sidebar 

Search for "Python Test Explorer" and install the extension by **Little Fox Team**. This extension provides a graphical interface for running and managing **Python** tests.

<p align="center">
    <img src="/labs/lab-07/lab-7-2.png" alt="drawing" width="500"/>
</p>


### Installing pytest

**pytest** is the most popular testing framework for **Python**. It makes writing and running tests simple and intuitive. First, make sure your virtual environment is activated:

```bash
cp125_env\Scripts\activate
```

You should see `(cp125_env)` in your terminal prompt. Now install **pytest**:

```bash
python -m pip install pytest
```

This installs **pytest** only in your virtual environment, not globally on your system. This is exactly what we want - each project can have its own version of **pytest**.


### Set Up Python Test Extension

On the sidebar, click the **Flask** symbol and then click **Configure Python Test**

<p align="center">
    <img src="/labs/lab-07/lab-7-3.png" alt="drawing" width="300"/>
</p>

::: warning
Some of you might not see this option. This is because our repo dont have any test yet. If you don't see it, just skip this step and the steps below.
:::

On the top bar, choose **Pytest**

<p align="center">
    <img src="/labs/lab-07/lab-7-4.png" alt="drawing" width="300"/>
</p>

Next, choose **Root Directory**

<p align="center">
    <img src="/labs/lab-07/lab-7-5.png" alt="drawing" width="300"/>
</p>







