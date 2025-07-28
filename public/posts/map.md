```cpp
map<string, int> mp;
cin >> mp[string];
map<string, int>::iterator it = mp.begin();
while (it != mp.end()) {
    // first is string value, second is int value
    cout << it->first << ", " << it->second << endl;
    // Remove or erase
    if (it->first == 1) {
       it = m.erase(it);
    }
    ++it;
}

unordered_map<int, int> arr;
for(int i = 0; i < 5; i++) {
    cin >> v;
    arr[v]++;
}
for(const auto& [key, val] : arr) cout << val;
```
