#!/usr/bin/env python

class Chores:
    def __init__(self, choreName, choreDuration, chorePriority):

        self.choreName = choreName
        self.choreDuration = choreDuration
        self.chorePriority = chorePriority
        print self.choreDuration

dishes = Chores("dishes", 10, 4)
laundry = Chores("laundry", 60, 4)
cooking = Chores("cooking", 30, 3)
bed = Chores("bed", 5, 3)
dog = Chores("dog", 30, 2)
cleaning = Chores("cleaning", 60, 1)
groceries = Chores("groceries", 60, 1)
    
choresList = [dishes, laundry, cooking, bed, dog, cleaning, groceries]
choresList.sort(key=lambda x: (x.chorePriority, x.choreDuration), reverse=True)

for i in range(0, len(choresList)):
    print choresList[i].choreName
