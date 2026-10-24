# Custom Hash Table Implementation

A pure Python implementation of an associative array (Hash Table) built from scratch using Unicode hashing and nested dictionary-based separate chaining to resolve collisions, complete with an interactive web visualizer.

---

## 🚀 Key Features

- **Custom Unicode Hashing Algorithm:** Computes hash codes by summing character codepoints (`ord(char)`).
  $$\text{hash}(\text{key}) = \sum_{i=0}^{n-1} \text{ord}(\text{key}[i])$$
- **Collision Resolution (Separate Chaining):** When anagrams or collision keys produce the same hash index (e.g., `'dear'` and `'read'` both equal `412`), entries are maintained in a nested key-value dictionary bucket.
- **Graceful Error Suppression:** Safely handles non-existent keys on removal and lookup without throwing runtime exceptions.
- **Interactive Visualizer:** Browser-based dashboard showing Unicode sum decomposition and bucket state in real-time.

---

## 📋 Python API Reference

```python
from hash_table import HashTable

ht = HashTable()

# 1. Hashing
print(ht.hash("golf"))  # 424

# 2. Insertion
ht.add("golf", "sport")
ht.add("dear", "friend")
ht.add("read", "book")  # Collides at 412 with 'dear'

# Current Collection:
# {
#   424: {'golf': 'sport'},
#   412: {'dear': 'friend', 'read': 'book'}
# }

# 3. Lookup
print(ht.lookup("golf"))  # 'sport'
print(ht.lookup("unknown"))  # None

# 4. Deletion
ht.remove("dear")
print(ht.lookup("dear"))  # None
print(ht.lookup("read"))  # 'book' (preserves bucket peers)
```

---

## ⏱️ Complexity Analysis

| Operation | Average Case | Worst Case (High Collisions) |
| :--- | :--- | :--- |
| **Hash Computation** | $O(k)$ where $k = \text{len(key)}$ | $O(k)$ |
| **Insert (`add`)** | $O(1)$ amortized | $O(n)$ |
| **Lookup** | $O(1)$ average | $O(n)$ |
| **Delete (`remove`)** | $O(1)$ average | $O(n)$ |

---

## 💻 Visualizer Quickstart

Open `index.html` in any web browser to:
1. Trace the Unicode calculation breakdown live as you type.
2. Experiment with collision-inducing words (e.g. `fcc` vs `cfc`, `dear` vs `read`).
3. View the internal bucket memory layout in real-time.