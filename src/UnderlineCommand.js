// @flow

import UICommand from './ui/UICommand';
import {EditorState} from 'prosemirror-state';
import {EditorView} from 'prosemirror-view';
import {MARK_UNDERLINE} from './MarkNames';
import {Transform} from 'prosemirror-transform';
import {toggleMark} from 'prosemirror-commands';
import findNodesWithSameMark from './findNodesWithSameMark';

class UnderlineCommand extends UICommand {

  isActive = (state: EditorState): boolean => {
    const {schema, tr, doc, selection} = state;
    const {from, to} = selection;
    const markType = schema.marks[MARK_UNDERLINE];
    if (markType && from < to) {
      return !!findNodesWithSameMark(doc, from, to, markType);
    }
    return false;
  };

  execute = (
    state: EditorState,
    dispatch: ?(tr: Transform) => void,
    view: ?EditorView,
  ): boolean => {
    const {schema, tr, selection} = state;
    if (selection.empty) {
      return tr;
    }
    const markType = schema.marks[MARK_UNDERLINE];
    if (!markType) {
      return tr;
    }
    return toggleMark(markType)(state, dispatch, view);
  };
}

export default UnderlineCommand;
