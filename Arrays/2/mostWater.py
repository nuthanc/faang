def maxArea(height):
    area = 0
    for p1 in range(len(height)-1):
            for p2 in range(p1+1, len(height)):
                calcArea = min(height[p1], height[p2]) * (p2-p1)
                if calcArea > area:
                    area = calcArea
    return area

print(maxArea(height=[7,1,2,3,9]))