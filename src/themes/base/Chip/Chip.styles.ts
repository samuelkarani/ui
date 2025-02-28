import type { MapNamespaces } from '@stylexjs/stylex/lib/StyleXTypes';
import stylex from '@stylexjs/stylex';

import type { IStyles } from '@/helpers/types';
import type { IChipStyleKey } from '@/components/atoms/Chip';
import type { IStateLayerStyleKey } from '@/components/utils/StateLayer';
import type { IElevationStyleKey } from '@/components/utils/Elevation';
import type { IFocusRingStyleKey } from '@/components/utils/FocusRing';
import type { ICircularProgressIndicatorStyleKey } from '@/components/atoms/CircularProgressIndicator';
import { componentVars as vars } from './Chip.stylex';
import { componentVars as chipStateVars } from './Chip.states.stylex';
import { componentVars as elevationVars } from '../Elevation/Elevation.stylex';
import { componentVars as focusRingVars } from '../FocusRing/FocusRing.stylex';
import { componentVars as statelayerVars } from '../StateLayer/StateLayer.stylex';
import { componentVars as circularProgressIndicatorVars } from '../CircularProgressIndicator/CircularProgressIndicator.stylex';

// https://github.com/material-components/material-web/blob/main/chips/internal/_shared.scss
// https://github.com/material-components/material-web/blob/main/chips/internal/_elevated.scss

type IChipStyles = IStyles<IChipStyleKey>;
export const styles: MapNamespaces<IChipStyles> = stylex.create<IChipStyles>({
  host: {
    borderRadius: chipStateVars.containerShape,
    display: 'inline-flex',
    height: vars.containerHeight,
    cursor: 'default',
    [chipStateVars.containerShape]: vars.containerShape,
    [chipStateVars.iconColor]: vars.iconColor,
  },
  host$interactive: {
    cursor: 'pointer',

    [chipStateVars.iconColor]: {
      default: vars.iconColor$interactive,
      ':is([data-focused])': vars.iconColor$focus,
      ':is([data-hovered])': vars.iconColor$hover,
      ':is([data-pressed])': vars.iconColor$pressed,
    },
  },
  host$avatar: {
    [chipStateVars.containerShape]: `calc(${vars.containerHeight} / 2)`,
  },
  host$disabled: {
    cursor: 'default',
  },
  container: {
    borderRadius: 'inherit',
    display: 'flex',
    height: '100%',
    position: 'relative',
    width: '100%',

    '::before': {
      borderRadius: 'inherit',
      content: '',
      inset: 0,
      pointerEvents: 'none',
      position: 'absolute',
    },
  },
  flatContainer: {
    '::before': {
      backgroundColor: vars.flatContainerColor,
    },
    [chipStateVars.elevation]: vars.flatContainerElevation,
  },
  flatContainer$interactive: {
    [chipStateVars.elevation]: {
      default: vars.flatContainerElevation,
      ':is([data-focused])': vars.flatContainerElevation$focus,
      ':is([data-hovered])': vars.flatContainerElevation$hover,
      ':is([data-pressed])': vars.flatContainerElevation$pressed,
    },
  },
  flatContainer$disabled: {
    '::before': {
      backgroundColor: vars.flatContainerColor$disabled,
      opacity: vars.flatContainerOpacity$disabled,
    },
    pointerEvents: 'none',
    [chipStateVars.elevation]: vars.flatContainerElevation$disabled,
  },
  selectedFlatContainer: {
    '::before': {
      backgroundColor: vars.selectedFlatContainerColor,
    },
    [chipStateVars.elevation]: vars.flatContainerElevation,
  },
  selectedFlatContainer$interactive: {
    [chipStateVars.elevation]: {
      default: vars.flatContainerElevation,
      ':is([data-focused])': vars.selectedFlatContainerElevation$focus,
      ':is([data-hovered])': vars.selectedFlatContainerElevation$hover,
      ':is([data-pressed])': vars.selectedFlatContainerElevation$pressed,
    },
  },
  selectedFlatContainer$disabled: {
    '::before': {
      backgroundColor: vars.selectedFlatContainerColor$disabled,
      opacity: vars.selectedFlatContainerOpacity$disabled,
    },
    pointerEvents: 'none',
    [chipStateVars.elevation]: vars.selectedFlatContainerElevation$disabled,
  },
  elevatedContainer: {
    '::before': {
      backgroundColor: vars.elevatedContainerColor,
    },
    [chipStateVars.elevation]: vars.elevatedContainerElevation,
  },
  elevatedContainer$interactive: {
    [chipStateVars.elevation]: {
      default: vars.elevatedContainerElevation,
      ':is([data-focused])': vars.elevatedContainerElevation$focus,
      ':is([data-hovered])': vars.elevatedContainerElevation$hover,
      ':is([data-pressed])': vars.elevatedContainerElevation$pressed,
    },
  },
  elevatedContainer$disabled: {
    '::before': {
      backgroundColor: vars.elevatedContainerColor$disabled,
      opacity: vars.elevatedContainerOpacity$disabled,
    },
    pointerEvents: 'none',
    [chipStateVars.elevation]: vars.elevatedContainerElevation$disabled,
  },
  selectedElevatedContainer: {
    '::before': {
      backgroundColor: vars.selectedElevatedContainerColor,
    },
    [chipStateVars.elevation]: vars.elevatedContainerElevation,
  },
  selectedElevatedContainer$interactive: {
    [chipStateVars.elevation]: {
      default: vars.elevatedContainerElevation,
      ':is([data-focused])': vars.elevatedContainerElevation$focus,
      ':is([data-hovered])': vars.elevatedContainerElevation$hover,
      ':is([data-pressed])': vars.elevatedContainerElevation$pressed,
    },
  },
  selectedElevatedContainer$disabled: {
    '::before': {
      backgroundColor: vars.selectedFlatContainerColor$disabled,
      opacity: vars.selectedFlatContainerOpacity$disabled,
    },
    pointerEvents: 'none',
    [chipStateVars.elevation]: vars.selectedFlatContainerElevation$disabled,
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    appearance: 'none',
    backgroundColor: 'unset',
    borderStyle: 'unset',
    borderRadius: 'inherit',
    outline: 'none',
    padding: 0,
    position: 'relative',
    textDecoration: 'none',
    cursor: 'inherit',
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
  },
  action$trailing: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingInlineStart: vars.iconLabelSpace,
    paddingInlineEnd: vars.trailingIconTrailingSpace,
    cursor: 'pointer',
    flexGrow: 0,
    flexShrink: 0,
  },
  action$primary: {
    paddingInlineStart: vars.leadingSpace,
    paddingInlineEnd: vars.trailingSpace,
  },
  action$primary$hasLeading: {
    paddingInlineStart: vars.iconLeadingSpace,
  },
  action$primary$hasTrailing: {
    paddingInlineEnd: 0,
  },
  action$primary$avatar: {
    paddingInlineStart: 4,
  },
  touchTarget: {
    // Place content above background elements
    zIndex: 1,
    height: 48,
    inset: '50% 0 0',
    position: 'absolute',
    transform: 'translateY(-50%)',
    width: '100%',
  },
  outline: {
    borderWidth: vars.outlineWidth,
    borderStyle: 'solid',
    borderRadius: 'inherit',
    inset: 0,
    pointerEvents: 'none',
    position: 'absolute',

    borderColor: vars.outlineColor,
  },
  outline$interactive: {
    borderColor: {
      default: vars.outlineColor,
      ':is([data-focused])': vars.outlineColor$focus,
      ':is([data-pressed])': vars.outlineColor$pressed,
    },
  },
  outline$selected: {
    borderWidth: vars.selectedOutlineWidth,
  },
  outline$disabled: {
    borderColor: vars.outlineColor$disabled,
    opacity: vars.outlineOpacity$disabled,
  },
  labelContainer: {
    minWidth: 0,

    // Long labels are cut off with ellipsis by default. `text-overflow` and
    // `text-wrap` can customize this.
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textWrap: 'nowrap',
  },
  labelContainer$hasTrailing: {
    position: 'relative',
  },
  label: {
    // Place content above background elements
    zIndex: 1,
    fontFamily: vars.labelTextFont,
    fontSize: vars.labelTextSize,
    lineHeight: vars.labelTextLineHeight,
    letterSpacing: vars.labelTextLetterSpacing,
    fontWeight: vars.labelTextWeight,
    height: '100%',
    userSelect: 'none',
    color: vars.labelTextColor,
  },
  label$interactive: {
    color: {
      default: vars.labelTextColor,
      ':is([data-focused])': vars.labelTextColor$focus,
      ':is([data-hovered])': vars.labelTextColor$hover,
      ':is([data-pressed])': vars.labelTextColor$pressed,
    },
  },
  label$selected: {
    color: vars.selectedLabelTextColor,
  },
  label$selected$interactive: {
    color: {
      default: vars.selectedLabelTextColor,
      ':is([data-focused])': vars.selectedLabelTextColor$focus,
      ':is([data-hovered])': vars.selectedLabelTextColor$hover,
      ':is([data-pressed])': vars.selectedLabelTextColor$pressed,
    },
  },
  label$disabled: {
    color: vars.labelTextColor$disabled,
    opacity: vars.labelTextOpacity$disabled,
  },
  icon: {
    // Place content above background elements
    zIndex: 1,
    alignSelf: 'center',
    display: 'flex',
    fill: 'currentColor',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon$selected: {
    color: vars.selectedIconColor,
  },
  icon$selected$interactive: {
    color: {
      default: vars.selectedIconColor,
      ':is([data-focused])': vars.selectedIconColor$focus,
      ':is([data-hovered])': vars.selectedIconColor$hover,
      ':is([data-pressed])': vars.selectedIconColor$pressed,
    },
  },
  icon$leading: {
    color: chipStateVars.iconColor,
    marginInlineEnd: vars.iconLabelSpace,
    fontSize: vars.iconSize,
    height: vars.iconSize,
    width: vars.iconSize,
  },
  icon$trailing: {
    position: 'relative',
    fontSize: vars.iconSize,
    height: vars.iconSize,
    width: vars.iconSize,
    color: vars.trailingIconColor,
  },
  icon$trailing$interactive: {
    color: {
      default: vars.trailingIconColor,
      ':is([data-focused])': vars.trailingIconColor$focus,
      ':is([data-hovered])': vars.trailingIconColor$hover,
      ':is([data-pressed])': vars.trailingIconColor$pressed,
    },
  },
  icon$trailing$selected: {
    color: vars.selectedTrailingIconColor,
  },
  icon$trailing$selected$interactive: {
    color: {
      default: vars.selectedTrailingIconColor,
      ':is([data-focused])': vars.selectedTrailingIconColor$focus,
      ':is([data-hovered])': vars.selectedTrailingIconColor$hover,
      ':is([data-pressed])': vars.selectedTrailingIconColor$pressed,
    },
  },
  icon$disabled: {
    [chipStateVars.iconColor]: vars.iconColor$disabled,
    opacity: vars.iconOpacity$disabled,
  },
  icon$avatar: {
    height: vars.avatarSize,
    width: vars.avatarSize,
  },
  invisible: {
    visibility: 'hidden',
  },
  overlay: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

type IStateLayerStyles = IStyles<IStateLayerStyleKey>;
export const stateLayerStyles: MapNamespaces<IStateLayerStyles> =
  stylex.create<IStateLayerStyles>({
    host: {
      [statelayerVars.color$hover]: vars.stateLayerColor$hover,
      [statelayerVars.opacity$hover]: vars.stateLayerOpacity$hover,
      [statelayerVars.color$pressed]: vars.stateLayerColor$pressed,
      [statelayerVars.opacity$pressed]: vars.stateLayerOpacity$pressed,
    },
  });

type IFocusRingStyles = IStyles<IFocusRingStyleKey>;
export const focusRingStyles: MapNamespaces<IFocusRingStyles> =
  stylex.create<IFocusRingStyles>({
    host: {
      [focusRingVars.shape]: chipStateVars.containerShape,
    },
  });

type IElevationStyles = IStyles<IElevationStyleKey>;
export const elevationStyles: MapNamespaces<IElevationStyles> = stylex.create<
  IStyles<IElevationStyleKey>
>({
  host: {
    [elevationVars.boxShadow]: chipStateVars.elevation,
  },
});

export const trailingActionFocusRingStyles: MapNamespaces<IFocusRingStyles> =
  stylex.create<IFocusRingStyles>({
    host: {
      [focusRingVars.shape]: '50%',
      height: `calc(4 / 3 * ${vars.iconSize})`,
      width: `calc(4 / 3 * ${vars.iconSize})`,
    },
    host$outward: {
      inset: 'unset',
    },
    host$inward: {
      inset: 'unset',
    },
  });

export const trailingActionStateLayerStyles: MapNamespaces<IStateLayerStyles> =
  stylex.create<IStateLayerStyles>({
    host: {
      borderRadius: '50%',
      height: `calc(4 / 3 * ${vars.iconSize})`,
      width: `calc(4 / 3 * ${vars.iconSize})`,
      inset: 'unset',

      [statelayerVars.color$hover]: vars.stateLayerColor$hover,
      [statelayerVars.opacity$hover]: vars.stateLayerOpacity$hover,
      [statelayerVars.color$pressed]: vars.stateLayerColor$pressed,
      [statelayerVars.opacity$pressed]: vars.stateLayerOpacity$pressed,
    },
  });

type ICircularProgressIndicatorStyles =
  IStyles<ICircularProgressIndicatorStyleKey>;
export const circularProgressIndicatorStyles: MapNamespaces<ICircularProgressIndicatorStyles> =
  stylex.create<ICircularProgressIndicatorStyles>({
    host: {
      [circularProgressIndicatorVars.color]: chipStateVars.iconColor,
    },
  });
