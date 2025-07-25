```cpp
bit & bit2 // 101 & 100 => 100. If two bits are 1 then 1 otherwise 0.
bit|bit2 // 101 | 100 => 101. If anyone 1 then 1 otherwise 0.
bit ^ bit2 // 101 ^ 100 => 001. If two bits are the same then 1 otherwise 0.
~bit // 101 => 010. // Reverse.
Example:
    string binary;
    cin >> binary;

    int len = binary.length();
    int num = stoi(binary, nullptr, 2); // Convert binary string to int
    int mask = (1 << len) - 1;          // Mask with same length as input
    int flipped = ~num & mask;          // Flip and mask

    // Output as binary string with leading zeros
    cout << bitset<32>(flipped).to_string().substr(32 - len) << endl;

bit << 3 // ((bit * 2) * 2) * 2. // Multiply by 2, 3 times with the result of each time.
bit >> 3 // ((bit / 2) / 2) / 2. // Divide by 2, 3 times with the result of each time.
```

##### All subset

```cpp
int main() {
    vector<int> arr = {1, 2, 3};
    int n = arr.size();

    // Start from 1 to skip the empty subset
    for (int mask = 1; mask < (1 << n); mask++) {
        cout << "{ ";
        for (int i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                cout << arr[i] << " ";
            }
        }
        cout << "}\n";
    }

    return 0;
}
```
