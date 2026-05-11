---
outline: deep
title: Lab 2 - Functions
---

# Lab 02: Functions

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/labs/lab-01/lab-1-1.png" alt="drawing" width="400"/>
</p>

## Functions

Launch **VS Code** and open the `exercise.py` file in `/labs/lab02/`. We'll build a billing system and discover why functions are essential.

### The Problem with Repetition

Imagine you're running a small restaurant and need to calculate the final bill for customers. Each bill requires:
1. Taking the meal price
2. Adding 6% _(SST) tax
3. Adding RM2.00 service charge
4. Showing the total

Without functions, you'd have to write the same calculation for every single customer. Copy this code into your `exercise.py` file:

```python
# Customer 1 - Nasi Lemak
price1 = 8.50
tax1 = price1 * 0.06  # 6% SST tax
service1 = 2.00
total1 = price1 + tax1 + service1
print(f"Customer 1 total: RM{total1:.2f}")

# Customer 2 - Roti Canai
price2 = 3.50
tax2 = price2 * 0.06  # 6% SST tax
service2 = 2.00
total2 = price2 + tax2 + service2
print(f"Customer 2 total: RM{total2:.2f}")

# Customer 3 - Mee Goreng
price3 = 7.00
tax3 = price3 * 0.06  # 6% SST tax
service3 = 2.00
total3 = price3 + tax3 + service3
print(f"Customer 3 total: RM{total3:.2f}")
```

Run this code. It works, but notice how you're repeating the exact same formula 3 times?

Now imagine the government changes SST from 6% to 8%. You'd need to find and change `0.06` in 3 different places. With 100 customers, you'd need to change it 100 times. If you miss even one, your calculations would be wrong.

::: danger PROBLEM
Repetitive code creates maintenance problems. Every change must be made multiple times, and missing even one creates bugs.
:::

### Creating a Function

The solution is to write the calculation **once** and reuse it. Replace all the code in your `exercise.py` with this:

```python
# Define the function once
def calculate_bill(meal_price):
    tax = meal_price * 0.06  # 6% SST tax
    service_charge = 2.00
    total = meal_price + tax + service_charge
    return total

# Now reuse it for each customer
total1 = calculate_bill(8.50)  # Nasi Lemak
print(f"Customer 1 total: RM{total1:.2f}")

total2 = calculate_bill(3.50)  # Roti Canai
print(f"Customer 2 total: RM{total2:.2f}")

total3 = calculate_bill(7.00)  # Mee Goreng
print(f"Customer 3 total: RM{total3:.2f}")
```

Run this code. The output is identical, but now the calculation exists in only one place. If SST changes to 8%, you only change one line: `tax = meal_price * 0.08`

### Identifying What Should Be Parameters

When converting repetitive code into a function, you need to identify what should become parameters. The key is to look for **what changes** between repetitions while **what stays the same** becomes the function body.

Let's analyze our restaurant example step by step.

Look at the repetitive code again:

```python
# Customer 1
price1 = 8.50          # This changes
tax1 = price1 * 0.06   # Formula stays the same
service1 = 2.00        # This stays the same
total1 = price1 + tax1 + service1  # Formula stays the same

# Customer 2
price2 = 3.50          # This changes (different value)
tax2 = price2 * 0.06   # Formula stays the same
service2 = 2.00        # This stays the same
total2 = price2 + tax2 + service2  # Formula stays the same
```

**What changes?** Only the meal price: `8.50`, `3.50`, `7.00`

**What stays the same?** The tax rate (0.06), service charge (2.00), and the formulas

**Rule:** Whatever changes between repetitions should become a parameter.

So we create a function with `meal_price` as the parameter:

```python
def calculate_bill(meal_price):  # meal_price is what changes
    tax = meal_price * 0.06      # The formula stays the same
    service_charge = 2.00
    total = meal_price + tax + service_charge
    return total
```

#### Example: Multiple Parameters

Sometimes more than one thing changes. Look at this rectangle calculation:

```python
# Rectangle 1
length1 = 5
width1 = 3
area1 = length1 * width1
print(f"Rectangle 1: {area1}")

# Rectangle 2
length2 = 10
width2 = 4
area2 = length2 * width2
print(f"Rectangle 2: {area2}")

# Rectangle 3
length3 = 7
width3 = 2
area3 = length3 * width3
print(f"Rectangle 3: {area3}")
```

**What changes?** Both `length` AND `width` change

**What stays the same?** The formula `length * width`

So we need **two parameters**:

```python
def calculate_rectangle_area(length, width):  # Both change, so both are parameters
    area = length * width  # Formula stays the same
    return area

# Now call with different values
print(f"Rectangle 1: {calculate_rectangle_area(5, 3)}")
print(f"Rectangle 2: {calculate_rectangle_area(10, 4)}")
print(f"Rectangle 3: {calculate_rectangle_area(7, 2)}")
```

::: tip PARAMETER IDENTIFICATION PROCESS
1. Look at the repetitive code
2. Make each changing value a parameter
3. Put the logic/formula in the function body
:::

Try this practice: Look at this code and identify what should be parameters:

```python
# Student 1
name1 = "Ahmad"
marks1 = 85
print(f"{name1} scored {marks1} marks")

# Student 2
name2 = "Fatimah"
marks2 = 92
print(f"{name2} scored {marks2} marks")
```

What changes? `name` and `marks`

What stays the same? The print statement structure

So you'd create:
```python
def display_score(name, marks):  # Two parameters for two changing values
    print(f"{name} scored {marks} marks")

display_score("Ahmad", 85)
display_score("Fatimah", 92)
```

### Understanding Function Components

Every function has three essential parts that work together. Understanding these parts is crucial for writing your own functions.

#### Part 1: Function Header

The function header is the first line that defines the function. It has four elements:

```python
def calculate_bill(meal_price):
│   │              │          │
│   │              │          └─ Colon (:)
│   │              └─────────── Parameter
│   └─────────────────────────── Function name
└─────────────────────────────── def keyword
```

**The def keyword** tells **Python** "I'm about to define a function."

**The function name** follows **Python** naming rules:
- Must use `snake_case` (lowercase with underscores)
- Should describe what the function does
- Cannot start with a number
- Cannot use **Python** keywords

**The parameter** (inside parentheses) is a placeholder for data the function needs.

**The colon** marks the end of the header and tells **Python** the function body is coming next.

#### Part 2: Function Body

The function body contains the actual code that runs when you call the function. It must be indented (4 spaces or 1 tab):

```python
def calculate_bill(meal_price):
    tax = meal_price * 0.06      # These lines are the body
    service_charge = 2.00         # They must be indented
    total = meal_price + tax + service_charge
    return total                  # return gives back the result
```

The `return` statement is how a function gives back a value. When you write `total1 = calculate_bill(8.50)`, the returned value gets stored in `total1`.

#### Part 3: Function Call

To use a function, you must call it by writing its name followed by parentheses containing any required values:

```python
# Define the function
def calculate_bill(meal_price):
    tax = meal_price * 0.06
    service_charge = 2.00
    total = meal_price + tax + service_charge
    return total

# Call the function - this runs the code inside
result = calculate_bill(8.50)
print(result)
```

::: tip EXECUTION ORDER
**Python** reads your code from top to bottom. You must **define** a function before you **call** it. If you try to call a function before defining it, you'll get a `NameError`.
:::

### Parameters and Arguments

These two terms are often confused, but they mean different things:

**Parameters** are placeholders in the function definition:
```python
def greet(name, age):  # name and age are PARAMETERS
    print(f"Hello {name}, you are {age} years old")
```

**Arguments** are the actual values you pass when calling the function:
```python
greet("Ahmad", 20)  # "Ahmad" and 20 are ARGUMENTS
```

Think of parameters as empty boxes that get filled with arguments when you call the function.

You can have multiple parameters separated by commas:

```python
def calculate_bmi(weight, height):  # Two parameters
    bmi = weight / (height * height)
    return bmi

# Two arguments must be provided
result = calculate_bmi(70, 1.75)
print(f"BMI: {result:.2f}")
```

The arguments must match the parameters in both **number** and **order**:

```python
def calculate_total(price, quantity, discount):  # 3 parameters
    subtotal = price * quantity
    total = subtotal - discount
    return total

# Must provide exactly 3 arguments in the same order
result = calculate_total(50, 3, 10)  # price=50, quantity=3, discount=10
```

### Return vs Print

One of the most common mistakes beginners make is confusing `return` with `print`. They seem similar but serve completely different purposes.

Try this experiment. Copy this code into your `exercise.py`:

```python
def add_with_print(a, b):
    result = a + b
    print(result)  # Displays the number on screen

def add_with_return(a, b):
    result = a + b
    return result  # Gives back the number

# Test 1: Using print
x = add_with_print(5, 3)
print(f"x contains: {x}")

# Test 2: Using return
y = add_with_return(5, 3)
print(f"y contains: {y}")
```

Run this code. What do you see?

The output shows:
```
8
x contains: None
y contains: 8
```

Why did `x` get `None`? Because `print()` only displays information on the screen - it doesn't give anything back to the caller. When a function has no `return` statement, **Python** automatically returns `None`.

The `return` version gives back the actual value, which you can store in a variable and use in further calculations.

::: tip WHEN TO USE EACH
Use `print()` when you want to show information to the user directly. Use `return` when you need to use the result in further calculations or store it in a variable.
:::

Try this to see why `return` is necessary for calculations:

```python
def calculate_discount(price):
    return price * 0.10  # Returns 10% of price

original_price = 100.00
discount_amount = calculate_discount(original_price)
final_price = original_price - discount_amount
print(f"Final price: RM{final_price:.2f}")
```

Now try changing `return` to `print` in the function. What happens? You'll get an error because you can't subtract `None` from a number!

## Factorization: Don't Repeat Yourself

Factorization is the process of taking repeated code and extracting it into a reusable function. This is one of the most important principles in programming.

### Identifying Repetition

Look for these signs that indicate you need factorization:
1. You're copy-pasting code blocks
2. The same calculation appears multiple times
3. Only the values change, but the logic stays the same

Copy this example into your `exercise.py`:

```python
# Calculating areas without factorization
pi = 3.14159

# Circle 1
radius1 = 5
area1 = pi * radius1 * radius1
print(f"Circle 1 (radius {radius1}): Area = {area1:.2f}")

# Circle 2
radius2 = 10
area2 = pi * radius2 * radius2
print(f"Circle 2 (radius {radius2}): Area = {area2:.2f}")

# Circle 3
radius3 = 7
area3 = pi * radius3 * radius3
print(f"Circle 3 (radius {radius3}): Area = {area3:.2f}")
```

Run this code. Notice how `pi * radius * radius` appears three times? This is a perfect candidate for factorization.

### Refactoring with Functions

Refactoring means improving code structure without changing what it does. Replace the code above with this factorized version:

```python
def calculate_circle_area(radius):
    pi = 3.14159
    area = pi * radius * radius
    return area

# Now the calculation is defined once and reused
area1 = calculate_circle_area(5)
print(f"Circle 1 (radius 5): Area = {area1:.2f}")

area2 = calculate_circle_area(10)
print(f"Circle 2 (radius 10): Area = {area2:.2f}")

area3 = calculate_circle_area(7)
print(f"Circle 3 (radius 7): Area = {area3:.2f}")
```

The benefits are immediate:
- If you need to calculate 100 circles, you just call the function 100 times
- If you need a more precise value of pi (3.14159265), you change only one line
- The code is shorter and easier to read

## Single Responsibility Principle

Each function should have **one** clear job. When a function tries to do too many things, it becomes difficult to understand, test, and modify.

### Recognizing Multiple Responsibilities

A function has multiple responsibilities if it:
- Gets input AND processes it AND displays output
- Performs multiple unrelated calculations
- Makes decisions AND displays results

Try this example:

```python
def process_student():
    # Responsibility 1: Getting input
    name = input("Enter student name: ")
    score = int(input("Enter score: "))
    
    # Responsibility 2: Making decision
    if score >= 50:
        status = "Pass"
    else:
        status = "Fail"
    
    # Responsibility 3: Displaying output
    print(f"Student: {name}")
    print(f"Score: {score}")
    print(f"Status: {status}")

# Run the function
process_student()
```

This function does three completely different jobs. What if you want to change how pass/fail is determined but keep the same input method? You'd have to dig through all the code.

### Splitting Responsibilities

A better approach is to split this into three focused functions:

```python
def get_student_data():
    name = input("Enter student name: ")
    score = int(input("Enter score: "))
    return name, score

def determine_status(score):
    if score >= 50:
        return "Pass"
    else:
        return "Fail"

def display_results(name, score, status):
    print(f"Student: {name}")
    print(f"Score: {score}")
    print(f"Status: {status}")

# Use them together
student_name, student_score = get_student_data()
student_status = determine_status(student_score)
display_results(student_name, student_score, student_status)
```

Now each function has one clear purpose:
- `get_student_data()` only handles input
- `determine_status()` only makes the pass/fail decision
- `display_results()` only shows information

If the passing grade changes to 60, you only modify `determine_status()`. The other functions remain untouched.

::: tip THE 5-WORD TEST
If you can't describe what a function does in 5 words or less, it probably does too much and should be split.
:::

## Decomposition: Breaking Down Complex Problems

Decomposition is the art of breaking a large, complex task into smaller, manageable functions. Instead of writing one massive function that does everything, you create several small functions that each handle one piece of the puzzle.

### Why Decompose?

Consider calculating an employee's monthly salary:
1. Base salary
2. Add allowances (transport, meal)
3. Add overtime pay
4. Subtract EPF (11%)
5. Subtract SOCSO (2%)
6. Calculate net salary

Writing this as one long calculation is error-prone and hard to understand. Instead, decompose it into steps.

### Step-by-Step Decomposition

Create separate functions for each calculation step:

```python
def calculate_allowances():
    transport = 200.00
    meal = 150.00
    return transport + meal

def calculate_overtime(base_salary, overtime_hours):
    hourly_rate = base_salary / 160  # Assuming 160 working hours per month
    overtime_rate = hourly_rate * 1.5  # 1.5x for overtime
    return overtime_hours * overtime_rate

def calculate_epf(gross_salary):
    return gross_salary * 0.11

def calculate_socso(gross_salary):
    return gross_salary * 0.02

def calculate_net_salary(base_salary, overtime_hours):
    # Step 1: Calculate gross salary
    allowances = calculate_allowances()
    overtime = calculate_overtime(base_salary, overtime_hours)
    gross = base_salary + allowances + overtime
    
    # Step 2: Calculate deductions
    epf = calculate_epf(gross)
    socso = calculate_socso(gross)
    
    # Step 3: Calculate net
    net = gross - epf - socso
    return net

# Use it
salary = calculate_net_salary(5000, 10)
print(f"Net salary: RM{salary:.2f}")
```


Each function is simple and focused. If EPF rate changes, you only modify `calculate_epf()`. If overtime rules change, you only modify `calculate_overtime()`.

This approach makes debugging easier too. If the final number seems wrong, you can test each function individually to find which step has the bug.

## Exercise 1: Road Trip Budgeter <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise1/exercise1.py`.

**Situation:**

A driver wants to know if his money is enough for a **round trip**. The condition depends on the length of the trip, the cost of fuel and fuel per litre used by the car.

**Task:**
Write a program using boolean logic.

## Exercise 2: Camping Logistics <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise2/exercise2.py`.

**Situation:**

A camp organizer needs to calculate the **total budget** for an event. The total cost is determined by the cost of tents (based on number of participants and tent capacity) plus the cost of food (per participant).

**Task:**
Write a program that calculates and returns the single **total cost** required for the event.

## Exercise 3: Secure Vault System <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise3/exercise3.py`.

**Situation:**

A high-security vault system requires authentication. Access is granted ONLY to:
1. "Director" with PIN `1122`
2. "Security" with PIN `9900`

Any other name or PIN combination must result in denied access.

**Task:**
Write a program that validates entry attempts and returns `True` (Access Granted) or `False` (Access Denied).

## Exercise 4: Dynamic Parking Rate <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise4/exercise4.py`.

**Situation:**

A parking system determines hourly rates dynamically:
- **Electric** vehicles pay **RM2.00/hour** at all times.
- **Hybrid** vehicles pay **RM2.00/hour** ONLY between **10pm (22)** and **6am (6)**. Otherwise, they pay **RM5.00/hour**.
- All **Other** vehicles pay **RM5.00/hour** at all times.

**Task:**
Write a program that calculates and returns the correct hourly rate (float) based on vehicle type and hour.

## Exercise 5: Triangle Checker <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise5/exercise5.py`.

**Situation:**
A geometry app needs a function to verify if three given line segments can physically form a triangle.

**Rule:**
A triangle is valid only if the sum of any two sides is greater than the third side:
1. `side1 + side2 > side3`
2. `side1 + side3 > side2`
3. `side2 + side3 > side1`

**Task:**
Write a function `is_valid_triangle(a, b, c)` that returns `True` if valid, `False` otherwise.

## Exercise 6: Leap Year Detector <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise6/exercise6.py`.

**Situation:**
A calendar app needs to identify leap years correctly to handle February 29th.

**Rules:**
A year is a leap year if:
1. It is exactly divisible by 4...
2. BUT NOT if it is divisible by 100...
3. UNLESS it is ALSO divisible by 400.

**Examples:**
- 2024: Yes (divisible by 4)
- 1900: No (divisible by 100)
- 2000: Yes (divisible by 400)

**Task:**
Write a function `is_leap_year(year)` that returns `True` or `False`.

## Exercise 7: Rectangle Collision <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise7/exercise7.py`.

**Situation:**
A game engine needs to detect if two objects (rectangles) have crashed into each other.

**Task:**
Write a function `check_collision(x1, y1, w1, h1, x2, y2, w2, h2)` that returns `True` if the rectangles overlap, `False` if they don't.

**Parameters:**
- `x1, y1`: Top-left coordinate of Rectangle 1
- `w1, h1`: Width and Height of Rectangle 1
- `x2, y2`: Top-left coordinate of Rectangle 2
- `w2, h2`: Width and Height of Rectangle 2

**Hint:**
It is easier to check when they **DON'T** overlap:
- Rect 1 is too far to the Left of Rect 2
- Rect 1 is too far to the Right of Rect 2
- Rect 1 is too high above Rect 2
- Rect 1 is too low below Rect 2

If NONE of these are true, they must be touching!

## Exercise 8: Bouncing Ball Simulation <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise8/exercise8.py`.

**Situation:**
 
A ball is dropped from a certain height. When it hits the ground, it bounces back up but only reaches 80% of its previous height due to energy loss. The ball continues bouncing, getting lower each time, until the bounce height becomes less than 1 unit. At that point, the ball is considered stopped.

Your task is to simulate this bouncing behavior.

**You need to calculate:**
1. How many times the ball bounces before stopping
2. The total distance traveled by the ball (including the initial drop and all bounces up and down)

**Rules:**
- Each bounce reaches 80% of the previous height
- Ball stops when bounce height is less than 1
- Total distance includes: initial drop + (each bounce up + down)

**Task:**
Write functions that work together to simulate the bouncing ball and return the bounce count and total distance.

## Exercise 9: Level Up Calculator <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise9/exercise9.py`.

**Situation:**
 
In a game, leveling up requires XP. Each level requires more XP than the previous:

- Level 1 → 2: 100 XP
- Level 2 → 3: 200 XP
- Level 3 → 4: 300 XP
- ...and so on (+100 more each level)

A player has a total amount of XP. Calculate what level they reach and how much XP is left over.

**You need to find:**
1. The player's final level
2. The remaining XP after leveling

**Rules:**
- Start at level 1
- Each level costs 100 more XP than the previous
- Keep leveling up until not enough XP for next level

**Task:**
Write functions that work together to calculate the player's final level and remaining XP.

## Exercise 10: Drone Battery Manager <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise10/exercise10.py`.

**Situation:**
A drone is performing a forest survey. It consumes **1.5% battery per 10 meters** traveled. If the drone is in **"Sport Mode"**, this battery consumption **increases by 50%**. The drone needs to know if it has enough power to complete its mission and safely fly back to its starting point.

**Task:**
Write functions that work together to estimate battery usage for a **round trip** and return if it is safe to fly.

## Exercise 11: ATM Request Processor <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise11/exercise11.py`.

**Situation:**
A bank ATM processes withdrawal requests. For security and mechanical reasons:
1. All withdrawals must be in **multiples of RM10**.
2. The customer must have a **sufficient account balance**.

**Task:**
Write functions that work together to validate these rules and return the new balance if successful, or an error message.

## Exercise 12: RPG Strike Calculator <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise12/exercise12.py`.

**Situation:**
A role-playing game calculates combat damage based on a hero's **Luck** and **Base Attack**. If the hero's Luck is **above 70**, they land a "Critical Hit" that **doubles** their attack power. The final damage dealt is the attack power minus the **Enemy's Defense**.

**Task:**
Write functions that work together to calculate the enemy's final health (Health - Damage) and return it.

## Exercise 13: Global Shipping Quoter <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise13/exercise13.py`.

**Situation:**
A shipping firm calculates delivery costs based on weight and destination:
- **Domestic:** RM5.00 per kg
- **International:** RM15.00 per kg
- **Express Surcharge:** Add a flat RM10.00 if the user selects "Express Delivery."

**Task:**
Write functions that work together to calculate and return the final shipping quote.

## Exercise 14: Smart Garden Controller <Badge type="warning" text="Task" />

Navigate to `/labs/lab02/exercise14/exercise14.py`.

**Situation:**
A smart home system manages garden watering. It should turn on the pump ONLY if:
1. Soil moisture is **below 30%**.
2. It is a **safe time** to water. (It is dangerous to water between **10 AM and 4 PM** because the sun might scorch the leaves, UNLESS the temperature is **above 40°C**, in which case the plants need cooling anyway).

**Task:**
Write functions that work together to decide if the water pump should be triggered.
 
 ## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 2: Functions", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.
