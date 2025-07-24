# Binary Search

Binary search is a divide-and-conquer algorithm to find elements in a sorted array.

## Algorithm

1. Find mid
2. Compare with target
3. Adjust range

```cpp
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while(left <= right) {
        int mid = (left + right) / 2;
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```
