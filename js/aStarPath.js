	
	
	
	function getDirectionArray(startX, startY, goalX, goalY, mapId) {
		var problem = new createProblem(startX, startY, goalX, goalY, mapId);
		var winningPath = createAStarPath(problem);
		return winningPath;
	}
	
	  
	function createProblem(startX, startY, goalX, goalY, mapId) {
	      var blockMap = [];
	       //should do the below at a higher game level so it isn't always repeated
	      if (mapId == 1) {
	          this.maxX = 24;
	          this.maxY = 24;
	          for (var x = 0; x < 25; x++) {
	            blockMap[x] = [];
	            for (var y = 0; y < 25; y++) {
	              blockMap[x][y] = worldScreenCollision[y][x];
	            }
	         }
	      } else if (mapId == 2) {
	            this.maxX = 24;
	            this.maxY = 24;
	            for (var x = 0; x < 25; x++) {
	                blockMap[x] = [];
	                for (var y = 0; y < 25; y++) {
	                    blockMap[x][y] = townMapCollision[y][x];
	                } 
	            }
	        } else if (mapId == 3) {
	            this.maxX = 24;
	            this.maxY = 24;
	            for (var x = 0; x < 25; x++) {
	                blockMap[x] = [];
	                for (var y = 0; y < 25; y++) {
	                    blockMap[x][y] = caveMapCollision[y][x];
	                } 
	            }
	        }
	      this.blockMap = blockMap;
	      this.goalX = goalX;
	      this.goalY = goalY;
	      this.startX = startX;
	      this.startY = startY;
	  }
	
	 function createAStarPath(problem) {
	      var count = 0;
	      var node = new createFirstNode(problem);
	      var frontier = [];
	      var availActions = [];
	      frontier.push(node);
	      var explored = [];
	      //while (count < 5) {
	  while (true) { 
	      count++;
	      if (frontier.length == 0)
	            return []; 
	      //find the frontier node with smallest totalCost
	      var currTotal = 0, smallestTotal = 9999999, smallestLoc = 0;
	      for (var m = 0; m < frontier.length; m++) {
	          currTotal = frontier[m].totalCost;
	          if (currTotal < smallestTotal) {
	              smallestTotal = currTotal;
	              smallestLoc = m;
	          }
	      }
	      node = frontier.splice(smallestLoc, 1)[0];
	      if ( (problem.goalX  == node.stateX) && (problem.goalY == node.stateY) )
	          return getDirections(node);
	      explored.push(node);
	      availActions = new getAvailableActions(node, problem);
	      for (var i = 0; i < availActions.length; i++) {
	          var childNode = new createChildNode(problem, node, availActions[i]);
	          var inFrontier = false;
	          var inExplored = false;
	          var matchedFrontierNode;
	          var matchedFrontierNodeLoc;
	          for (var j = 0; j < frontier.length; j++) {
	              var frontierNode = frontier[j];
	              if (childNode.identifier == frontierNode.identifier) {
	                  inFrontier = true;
	                  matchedFrontierNode = frontierNode;
	                  matchedFrontierNodeLoc = j;
	                  break;
	              }
	          } //end frontier search
	          for (var k = 0; k < explored.length; k++) {
	              var exploredNode = explored[k];
	              if (exploredNode.identifier == childNode.identifier) {
	                  inExplored = true;
	                  break;
	              }
	          } //end explored search
	          if (!inFrontier && !inExplored) {
	              frontier.push(childNode);
	          } else if (inFrontier && (childNode.totalCost <  matchedFrontierNode.totalCost) ) {
	             frontier[matchedFrontierNodeLoc] = childNode;
	          } 
	      } //end actions loop 
	  } //end dowhile loop  
	  }
	  
	  function createFirstNode(problem) {
	      this.stateX = problem.startX;
	      this.stateY = problem.startY;
	      this.parent = null;
	      this.creationAction = null;
	      this.currCost = 0;
	      this.estCost = getEstDistance(problem.startX, problem.startY, problem.goalX, problem.goalY);
	      this.totalCost = this.currCost + this.estCost;
	      this.identifier = this.stateX + "," + this.stateY;
	  }
	   
	  function createChildNode(problem, parentNode, action) {
	      this.parent = parentNode;
	      this.creationAction = action;
	      this.stateX = getStateX(parentNode.stateX, action);
	      this.stateY = getStateY(parentNode.stateY, action);
	      this.currCost = parentNode.currCost + 1;
	      this.estCost = getEstDistance(this.stateX, this.stateY, problem.goalX, problem.goalY);
	      this.totalCost = this.currCost + this.estCost;
	      this.identifier = this.stateX + "," + this.stateY;
	  }
	  
	  function getAvailableActions(node, problem) {
	      var actionsAvail = [];
	      
		  //south
		  if (node.stateY < problem.maxY) {
		    if (problem.blockMap[node.stateX][node.stateY + 1] == 0) {
		        actionsAvail.push(0);
		        }
		    }
		  //west
		  if (node.stateX > 0) {
		    if (problem.blockMap[node.stateX - 1][node.stateY] == 0) {
		        actionsAvail.push(1);
		        }
		    }
		  //east
		  if (node.stateX < problem.maxX) {
		    if (problem.blockMap[node.stateX + 1][node.stateY] == 0) {
		        actionsAvail.push(2);
		        }
		    }
		  //north
	      if (node.stateY > 0) {
	        if (problem.blockMap[node.stateX][node.stateY - 1] == 0) {
	            actionsAvail.push(3);
	            }
	        }
		  return actionsAvail;
	  }
	  
	  function getStateX(x, action) {
	      switch(action) {
	          case 1: x--;
	                break;
	          case 2: x++;
	                break;
	      }
	      return x;
	  }
	  
	  function getStateY(y, action) {
	      switch(action) {
	          case 0: y++;
	                break;
	          case 3: y--;
	                break;
	      }
	      return y;
	  }
	  
	 function getEstDistance(currX, currY, goalX, goalY) {
	    return Math.sqrt( ( (goalX - currX) * (goalX - currX) ) + ( (goalY - (currY)) * (goalY - (currY)) ) );
	}
	
	function getDirections(winningNode) {
	    var actions = [];
	    var node = winningNode;
	    actions.push(winningNode.creationAction);
	    while (winningNode.parent) {
	        node = node.parent;
	        if (node.parent == null)
	            return actions;
	        else
	            actions.unshift(node.creationAction);
	    }
	    return [];
	}