import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import {
 StateContext, DispatchContext, useStateContext, SodaProvider, useDispatchContext,
} from './SodaContext';

const initialState = {
  messages: [],
};
const initialDispatch = jest.fn();

const wrapper = ({ children }) => (
  <DispatchContext.Provider value={initialDispatch}>
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  </DispatchContext.Provider>
);

// const mockUseDispatchContext = jest.fn().mockImplementation(() => (dispatch));
// const mockUseStateContext = jest.fn().mockImplementation(() => (initialState));

describe('useStateContext test', () => {
  test('should return state and dispatch ', () => {
    render(<SodaProvider />);
    const { result: state } = renderHook(() => useStateContext(), { wrapper });
    const { result: dispatch } = renderHook(() => useDispatchContext(), { wrapper });
    expect(state.current.messages.length).toBe(0);
    expect(dispatch.current).toBeTruthy();
  });
});