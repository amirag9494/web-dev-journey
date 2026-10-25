# Tower of Hanoi Solver & Visualizer

A clean implementation of the classic **Tower of Hanoi** mathematical puzzle using recursion and the divide-and-conquer paradigm, featuring a minimal interactive web visualizer.

---

## 📌 Problem Overview

The puzzle consists of three rods and $n$ disks of varying sizes. The objective is to move the entire stack from the first rod to the third rod under three constraints:
1. Only one disk can be moved at a time.
2. Only the top disk of a stack can be picked up.
3. No disk may be placed on top of a smaller disk.

The optimal number of moves required to solve a puzzle of $n$ disks is:
$$M(n) = 2^n - 1$$

---

## 🛠️ Python Implementation (`hanoi_solver.py`)

```python
def hanoi_solver(n):
    rods = [list(range(n, 0, -1)), [], []]
    states = [f"{rods[0]} {rods[1]} {rods[2]}"]

    def move(k, source, target, aux):
        if k == 0:
            return
        # 1. Move k - 1 disks from source to auxiliary
        move(k - 1, source, aux, target)

        # 2. Move largest disk to target
        disk = rods[source].pop()
        rods[target].append(disk)
        states.append(f"{rods[0]} {rods[1]} {rods[2]}")

        # 3. Move k - 1 disks from auxiliary to target
        move(k - 1, aux, target, source)

    move(n, 0, 2, 1)
    return "\n".join(states)

if __name__ == "__main__":
    print(hanoi_solver(3))
```

### Example Output for $n = 3$:
```text
[3, 2, 1] [] []
[3, 2] [] [1]
[3] [2] [1]
[3] [2, 1] []
[] [2, 1] [3]
[1] [2] [3]
[1] [] [3, 2]
[] [] [3, 2, 1]
```

---

## ⏱️ Algorithmic Complexity

- **Time Complexity:** $\mathcal{O}(2^n)$ — Each recursive step branches into two sub-calls of size $n - 1$.
- **Space Complexity:** $\mathcal{O}(n)$ — Call stack depth corresponds to the maximum recursion height.

---

## 🌐 Web Visualizer Features

- **Step-by-Step Playback:** Navigate forward (`Next`) and backward (`Prev`) through move states.
- **Auto-Play & Speed Control:** Adjust execution interval from 100ms to 1000ms.
- **Real-time State Logging:** Formatted output matching standard algorithm verification suites.

Just open `index.html` in any modern web browser to run the visualizer.