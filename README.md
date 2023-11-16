# Game of Life

Welcome to the Game of Life, a cellular automaton simulation implemented in Angular.

## Overview

The Game of Life is a classic cellular automaton devised by mathematician John Conway. It is a zero-player game, meaning its evolution is determined by its initial state, with no further input. The game consists of a grid of cells, each of which can be alive or dead. The state of each cell evolves based on simple rules, creating intricate patterns over time.

### Rules of the Game

At each step in time (or generation), the following transitions occur:

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

In this implementation, you can click on a cell to bring it to life. Initially, all cells are dead (generation 0), and it's up to the user to start the life by clicking on cells. Use the "PAUSE" button to stop the simulation, "START" to resume, and "RESET" to reset the grid.

## Getting Started

Follow these instructions to set up and run the project on your machine.

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MouhamedNdour/challenge-game-of-life.git
    ```

2. Navigate to the project directory:

    ```bash
    cd GameOfLife
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Development Server

Run the following command to start a development server:

```bash
ng serve --open
