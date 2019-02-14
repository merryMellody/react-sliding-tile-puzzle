import React, { Component } from "react";
import "./App.css";
import SlidingTilePuzzle from "react-sliding-tile-puzzle";
import { Button, Segment } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solvePuzzle: false,
      newPuzzle: false
    };
  }

  handleClickSolvePuzzle = () => {
    this.setState({ solvePuzzle: !this.state.solvePuzzle });
  };

  handleClickNewPuzzle = () => {
    this.setState({ newPuzzle: !this.state.newPuzzle });
  };

  render() {
    return (
      <div className="App">
        <Segment.Group>
          <Segment>Sliding Tile Puzzle</Segment>
          <Segment.Group horizontal>
            <Segment.Group vertical="true">
              <Segment>
                <Button fluid onClick={this.handleClickNewPuzzle}>
                  New Puzzle
                </Button>
              </Segment>
              <Segment>
                <Button fluid onClick={this.handleClickSolvePuzzle}>
                  Solve Puzzle
                </Button>
              </Segment>
            </Segment.Group>
            <Segment>
              <SlidingTilePuzzle
                solvePuzzle={this.state.solvePuzzle}
                newPuzzle={this.state.newPuzzle}
                maxIterations={300}
              />
            </Segment>
          </Segment.Group>
        </Segment.Group>
      </div>
    );
  }
}

export default App;
