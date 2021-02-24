def trap(height):
    p1, p2 = 0, len(height) - 1 if len(height) else 0 
    val, maxLeft, maxRight = 0, 0, 0

    while(p1 != p2):
        if height[p1] <= height[p2]:
            if maxLeft > height[p1]:
                val += maxLeft - height[p1]
            maxLeft = max(maxLeft, height[p1])
            p1 += 1
        else:
            if maxRight > height[p2]:
                val += maxRight - height[p2]
            maxRight = max(maxRight, height[p2])
            p2 -= 1
    return val


print(trap(height=[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
