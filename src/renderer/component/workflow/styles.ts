const selectColor = '#9fb4ff';
const defaultColor = '#b0b0b0';
const cardBorderRadius = 5;
const cardShadowLevel = `1px 1px 1px 1px ${defaultColor}`;
const cardShadowLevelSelected = `1px 1px 1px 2px ${selectColor}`;

export const xsSvg = {
  fontSize: '16px',
};

export const infoFontStyle = {
  fontSize: '12px',
};

export const inputFontSize = {
  fontSize: '13px',
};

export const inputFontStyle = {
  style: inputFontSize,
};

export const buttonIconSize = {
  fontSize: '13px',
};

export const subworkflowCardStyle = (selected: boolean) => {
  return {
    width: '90%',
    // background: '#d4fcec',
    borderRadius: cardBorderRadius,
    alignContent: 'center',
    alignItems: 'center',
    boxShadow: selected ? cardShadowLevelSelected : cardShadowLevel,
    cursor: 'pointer',
  };
};

export const stepCardStyle = {
  width: '90%',
  // background: '#ccebff',
  borderRadius: cardBorderRadius,
  boxShadow: cardShadowLevel,
};

export const viewCallCardStyle = {
  // background: stepColor,
  borderRadius: cardBorderRadius,
  boxShadow: cardShadowLevel,
};

export const viewCompleteExecCardStyle = {
  // background: stepColor,
  borderRadius: cardBorderRadius,
  boxShadow: cardShadowLevel,
};

export const viewConditionCardStyle = {
// background: stepColor,
  borderRadius: cardBorderRadius,
  boxShadow: cardShadowLevel,
};

export const viewIterationCardStyle = {
// background: stepColor,
  borderRadius: cardBorderRadius,
  boxShadow: cardShadowLevel,
};

export const viewIterationChildCardStyle = {
// background: stepColor,
  borderRadius: cardBorderRadius,
  boxShadow: cardShadowLevel,
};


export const viewJumpCardStyle = {
// background: stepColor,
  borderRadius: cardBorderRadius,
  boxShadow: cardShadowLevel,
};

