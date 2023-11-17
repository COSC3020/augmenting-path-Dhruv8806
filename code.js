function augmentingPath(graph, start, end) { 
    return findAugmentingPath(graph, start, end, []);
}

function findAugmentingPath(graph, current, end, path) { 
    path.push(current); 

    if (current == end) { 
        return path;
    }

    for (const neighbor in graph[current]) {
        if (!path.includes(neighbor) && graph[current][neighbor] > 0) {
            let newPath = findAugmentingPath(graph, neighbor, end, [...path]);
            if (newPath.length > 0) {
                return newPath;
            }
        }
    }

    path.pop();
    return []; 
}



/*
Sources used: 
TA
https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/
Referred to Ryan Zafft Implementation
*/
