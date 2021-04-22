### Quick Sort

* Pivot
  * Based on Pivot, the elements smaller are before and elements larger are after the pivot
* Worst case of O(n^2) when pivot is the smallest or the largest element because of which the array is split into half
  * In this case, merge sort is the best, because it has Worst case of O(nlogn)
* Space Complexity is O(logn)

### Merge sort

* Split till there is only one
* Then combine using merge method of left and right half
* Space Complexity is O(n)