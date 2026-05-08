---
outline: deep
title: Lab 3 - Lists and Data Structures
---

# Lab 03: Lists and Data 

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/labs/lab-01/lab-1-1.png" alt="drawing" width="400"/>
</p>

## Why Do We Need Data Structures?

Launch **VS Code** and open the `exercise.py` file in `/labs/lab03/`. We'll discover why storing multiple values in individual variables becomes a nightmare.

### The Problem with Individual Variables

Imagine you're building a student grade system for your class. You need to store scores for just 5 students. Copy this code into your `exercise.py` file:

```python
# Storing 5 student scores
score1 = 85
score2 = 92
score3 = 78
score4 = 88
score5 = 95

# To find the average... we need to manually add each one
total = score1 + score2 + score3 + score4 + score5
average = total / 5
print(f"Average score: {average}")
```

Run this code. It works, but notice the problems:

1. You had to create 5 separate variables
2. You had to manually type each variable name in the calculation
3. The calculation formula changes if you add or remove students

Now imagine you have 50 students. Or 500 students. You'd need to create 500 variables and type all 500 names in your calculation

::: warning PROBLEM
Individual variables don't scale. The more data you have, the more unmanageable your code becomes. You can't loop through variables, and every change requires editing multiple lines.
:::

### The Solution: Lists

Replace all the code in your `exercise.py` with this:

```python
# Store all scores in ONE list
scores = [85, 92, 78, 88, 95]

# Now we can access individual scores by index
print(f"First score: {scores[0]}")
print(f"Third score: {scores[2]}")
print(f"Last score: {scores[4]}")
```

Run this code. Look at the difference:

- **One variable** instead of five
- **Organized by position** - you can access any score using its index
- **Adding more students?** Just add numbers to the list

Try adding more scores to the list:
```python
scores = [85, 92, 78, 88, 95, 73, 91, 87]
print(f"We now have {scores} scores")
```

Run it again. The list grows easily

::: tip INFO
A **data structure** is a way to organize and store multiple values so they can be used efficiently. Instead of many variables, you use ONE structure that holds everything.
:::

## What is a List?

A list is **Python**'s most commonly used data structure. Think of it as a numbered container where you can store multiple items in a specific order.

### Creating Your First List

Copy this code into your `exercise.py`:

```python
# Creating different types of lists
fruits = ["apple", "banana", "cherry"]
numbers = [10, 20, 30, 40, 50]
prices = [19.99, 24.50, 15.00]

print(fruits)
print(numbers)
print(prices)
```

Run this code. What do you see?

Each list is printed with square brackets `[ ]` and commas separating the items. This is how **Python** represents lists.

### List Structure

Every list has these components:

```python
fruits = ["apple", "banana", "kiwi"]
```

| Component | Value |
|-----------|-------|
| **List name** | `fruits` |
| **Elements** | `"apple"`, `"banana"`, `"kiwi"` |
| **Number of elements** | 3 |
| **List size** | 3 |

The **size** and **number of elements** mean the same thing - how many items are in the list.

### What Can Lists Hold?

Lists can store any type of data. Try this:

```python
# Different data types
integers = [10, 20, 30, 40, 50]
floats = [1.5, 2.3, 3.7, 4.1]
strings = ["apple", "banana", "cherry"]
booleans = [True, False, True, False]

print("Integers:", integers)
print("Floats:", floats)
print("Strings:", strings)
print("Booleans:", booleans)
```


## Accessing List Elements: Indexing

Now that you can create lists, you need to know how to access individual items. This is where **indexing** comes in.

### Positive Indexing

**Python** numbers list elements starting from `0`. This is called **zero-based indexing**.

```python
fruits = ["apple", "banana", "kiwi", "durian", "guava", "orange"]
#          0        1         2       3         4        5
```

Copy this code:

```python
fruits = ["apple", "banana", "kiwi", "durian", "guava", "orange"]

print(fruits[0])  # First element
print(fruits[2])  # Third element
print(fruits[5])  # Sixth element
```

Run this code. What do you see?


::: warning COMMON MISTAKE
The first element is at index `0`, not `1`
:::

### Negative Indexing

**Python** also lets you count from the **end** of the list using negative numbers:

```python
fruits = ["apple", "banana", "kiwi", "durian", "guava", "orange"]
#          -6       -5        -4      -3        -2       -1
```

Try this:

```python
fruits = ["apple", "banana", "kiwi", "durian", "guava", "orange"]

print(fruits[-1])  # Last element
print(fruits[-2])  # Second-to-last element
print(fruits[-6])  # First element (counting from end)
```

Run this code. Notice that:
- `fruits[-1]` gives you the **last** element (`"orange"`)
- `fruits[-2]` gives you the **second-to-last** element (`"guava"`)

::: tip WHEN TO USE NEGATIVE INDEXING
Use `[-1]` when you need the last item but don't know the list size. This is much more common than other negative indices. In practice, you'll rarely use anything beyond `[-1]` or `[-2]`.
:::

### Nested List Indexing

Lists can contain other lists This is called **nesting**. Try this:

```python
students = [
    ["Ali", 85, 92],
    ["Sara", 90, 88],
    ["Ahmad", 78, 82]
]

# Access the first student's data
print(students[0])  # ['Ali', 85, 92]

# Access Ali's name
print(students[0][0])  # Ali

# Access Sara's second score
print(students[1][2])  # 88
```

Run this code. The pattern is `list[outer_index][inner_index]`.

### The IndexError

What happens if you try to access an index that doesn't exist? Try this:

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[5])  # Only 3 elements, but asking for index 5
```

Run this code. You'll see:

```
IndexError: list index out of range
```

This error means you tried to access a position that doesn't exist in the list.

::: danger PREVENTING IndexError
Always make sure the index you're using is within the valid range. The valid indices for a list with 3 elements are 0, 1, 2 (or -1, -2, -3).
:::

## Modifying Lists

Lists are **mutable**, which means you can change them after creation.

### Changing Elements

You can modify individual elements by assigning a new value to an index:

```python
numbers = [10, 20, 30]
print(numbers)  # [10, 20, 30]

numbers[1] = 25  # Change the second element
print(numbers)  # [10, 25, 30]
```

Try this yourself. Change different indices and see what happens



## Exercise 1: Pixel Brightness Checker <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise1/exercise1.py`.

**Situation:**

An image processing app analyzes a row of pixels stored as grayscale values (0-255, where 0 is black and 255 is white). The app needs to count "bright spots" - pixels that are brighter than BOTH their left and right neighbors.

**Example:**
```
Pixels: [100, 120, 200, 150, 180, 160, 140]
         0    1    2    3    4    5    6

Index 2: brighter than neighbors → Bright spot
Index 4: brighter than neighbors → Bright spot
Count = 2
```

**Task:**

Write a function that takes a list of pixel values, returns the count of bright spots.

## Exercise 2: Subway Station Hop Counter <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise2/exercise2.py`.

**Situation:**

A subway line has stations stored in order in a list. A passenger wants to know how many stops between two stations by name.

If a station name does not exist in the list, return `-1`.

**Example:**
```
Stations: ["Central", "Marina", "Bukit", "Orchard", "Sentosa"]

From "Marina" to "Sentosa"
Marina at index 1, Sentosa at index 4
Stops = 3

From "Marina" to "Unknown"
→ -1 (station name does not exist)
```

**Task:**

Write functions that:
1. Find a station's position in the list
2. Calculate the stops between two stations

## Exercise 3: Cinema Seat Finder <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise3/exercise3.py`.

**Situation:**

A cinema booking system stores seat availability for a row as a list. Each element represents a seat: `0` means empty, `1` means taken. A couple wants to sit together, so the system needs to check if there are two adjacent empty seats anywhere in the row.

**Example:**
```
Row: [1, 0, 0, 1, 0, 1, 0, 0]
      0  1  2  3  4  5  6  7

Adjacent empty pairs found at positions (1,2) and (6,7)
→ True
```

**Task:**

Write a function that takes a list of seats, returns `True` if adjacent empty seats exist, `False` otherwise.

## Exercise 4: Weather Trend Analyzer <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise4/exercise4.py`.

**Situation:**

A weather app tracks daily temperatures. A "warming trend" is detected when the temperature increases for 2 consecutive days (day 2 > day 1 AND day 3 > day 2).

**Example:**
```
Temps: [25, 27, 29, 28, 30, 32, 31]
        0   1   2   3   4   5   6

Days 0-1-2: 25 → 27 → 29 (increasing twice) → Warming trend found
Days 3-4-5: 28 → 30 → 32 (increasing twice) → Warming trend found
```

**Task:**

Write a function that takes a list of temperatures, returns `True` if a warming trend exists, `False` otherwise.

## Exercise 5: Race Overtake Detector <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise5/exercise5.py`.

**Situation:**

A motorsport race tracker records car positions at two checkpoints. Each list contains car numbers in finishing order - index 0 is 1st place, index 1 is 2nd place, and so on.

All cars exist in both checkpoint lists.

**Example 1:**
```
Checkpoint 1: [5, 3, 7, 2, 9]
Checkpoint 2: [5, 7, 3, 2, 9]

Did Car 7 overtake Car 3?
- Before: Car 7 at index 2, Car 3 at index 1 → Car 7 behind
- After:  Car 7 at index 1, Car 3 at index 2 → Car 7 ahead
→ True
```

**Example 2:**
```
Checkpoint 1: [5, 3, 7, 2, 9]
Checkpoint 2: [5, 7, 3, 2, 9]

Did Car 5 overtake Car 3?
→ False (Car 5 was already ahead)
```

**Task:**

Write functions that:
1. Find a car's position in a checkpoint list
2. Determine if one car overtook another

## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 3: Lists and Data Structures", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.

