// @flow
import {EditorState, Plugin} from 'prosemirror-state';

const SPEC = {
  props: {
    attributes: {
      'class': 'prosemirror-editor',
      'data-prosemirror-editor': 'true',
    },
  },
};

class EditorAttributesPlugin extends Plugin {
  constructor() {
    super(SPEC);
  }
}

export default EditorAttributesPlugin;
