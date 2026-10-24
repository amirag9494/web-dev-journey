class HashTable:
    def __init__(self):
        self.collection = {}

    def hash(self, key: str) -> int:
        return sum(ord(char) for char in str(key))

    def add(self, key: str, value):
        hashed_key = self.hash(key)
        if hashed_key not in self.collection:
            self.collection[hashed_key] = {}
        self.collection[hashed_key][key] = value

    def remove(self, key: str):
        hashed_key = self.hash(key)
        if hashed_key in self.collection and key in self.collection[hashed_key]:
            del self.collection[hashed_key][key]

    def lookup(self, key: str):
        hashed_key = self.hash(key)
        if hashed_key in self.collection and key in self.collection[hashed_key]:
            return self.collection[hashed_key][key]
        return None