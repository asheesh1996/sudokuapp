import React, { FC } from "react";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { N, INDEX } from "../../../typings";
import { IReducer, selectBlock } from "../../../reducers";

interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  isActive: boolean;
  value: N;
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ workingGrid, selectedBlock }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    })
  );

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleClick() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]));
  }
  return (
    <Container
      data-cy={"block-$(rowIndex)-$(colIndex)"}
      active={state.isActive}
      onClick={handleClick}
    >
      {state.value === 0 ? "" : state.value}
    </Container>
  );
};

export default Block;
