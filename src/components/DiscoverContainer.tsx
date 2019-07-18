import React from 'react';
import Popular from './DiscoverContainer/Popular';
import Recent from './DiscoverContainer/Recent';
import styled from 'styled-components';

const DiscoverStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const DiscoverContainer: React.FunctionComponent<{}> = props => {
  return (
    <div>
      <h1>Discover</h1>
      <DiscoverStyled>
        <Popular />
        <Recent />
      </DiscoverStyled>
    </div>
  );
};

export default DiscoverContainer;
