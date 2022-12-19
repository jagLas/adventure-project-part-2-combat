#As part of AA Open's TDD practice we were asked to do the following:

Adventure TDD (Challenge)

In this project, you will be developing new adventure game feature with a partner via Test Driven Development (TDD).

Through this process, you will experience the interchangeable parts of OOP, readability and portability of SRP/DRY and unambiguous API requirements of TDD. If you and your partner have been following these three-letter coding principles throughout the week, the development and integration process should be smooth.
Goal

The goal is to integrate two separate adventure projects together, then develop new features using Test Driven Development. This will give you a taste of how individual contributors of different skill and experience levels can contribute to a large project.
Instructions

Start by working with your pair programming partner to integrate your previously built adventure games into one. If you both have been following OOP and SRP principles, this should be a smooth process. If not, you may have to spend time untangling dependencies to integrate the projects.

Once the projects have been integrated, decide on two new features to be built. This can be done in pairs or individually.

The next step is to be done individually. Write a suite of Mocha/Chai test specs describing the behavior needed for the feature. Remember, the code for these specs will be implemented by your partner so readability and clarity count.

Once both partners have finish writing test specs, exchange the specs and work on implementing your partner's feature individually. Once all tests are passing and the feature works locally, rejoin your partner and integrate both features into the original project.
Timing breakdown

This project should take around 2 hours to complete. You can follow this timing breakdown for a rough idea of how long each step should take. If you finish early, repeat the process with additional features.

    20 minutes - Work with your partner to combine your adventure games into a single project.
    10 minutes - Design a new inherited child class and feature
    30 minutes - Individually, write a suite of Mocha/Chai test specs describing the features of your new class
    50 minutes - Exchange tests with your pair programming partner and implement the feature from their specs
    10 minutes - Integrate the specs and code together into a single project

Requirements

    Two sets of Mocha/Chai specs with detail that describes the features
    The features should include one or more new child classes that inherit from either Item, Room, Character or Enemy.
    Working code implementations of the features and a passing suite of tests

Ideas

Here are some feature ideas. Feel free to use these or come up with your own ideas.

    Create a DarkRoom that inherits from Room and a Light that inherits from Item. Dark rooms show only a description of "You cannot see anything" unless a light is in the room or being held.
    Create a Shop that inherits from Room which allows you to buy and sell items using gold
    Create a Pet that inherits from Character which follows you around and defends you from attackers after being fed a treat


#I choose to implement a basic weapon feature and poison feature