
import { css, jsx } from '@emotion/core';
/** @jsx jsx */
const BreadStyle = css`
  width: 160px;
  height: 60px;
  background-color: #fff8c6;
  border: 2px solid #ffc800;
  border-radius: 10px;
`;

function EmotionBread() {
  return <div css={BreadStyle}>BREAD🍞 by emotion👩‍🎤</div>;
}

export default EmotionBread;
