def mostWater(heights):
    p1 = 0
    p2 = len(heights) - 1
    maxArea = 0
    while(p1 != p2):
        width = p2 - p1
        height = min(heights[p1], heights[p2])
        area = height * width
        maxArea = max(area, maxArea)
        if (heights[p1] > heights[p2]):
            p2 -= 1
        else:
            p1 += 1
    return maxArea

print(mostWater(heights=[4, 8, 1, 2, 3, 9]))
