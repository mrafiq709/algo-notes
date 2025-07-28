```cpp
// All subset
sort(nums.begin(), nums.end());
do {
    for (int x : nums) cout << x << " ";
    cout << endl;
} while (next_permutation(nums.begin(), nums.end()));

// last subset
vector<int> p(n);
for (int i = 0; i < n; i++) {
    cin >> p[i];
}
prev_permutation(p.begin(), p.end());
for (int i = 0; i < n; i++) {
    cout << p[i] << " \n"[i + 1 == n]; // print new line if 1 == n
}
```
