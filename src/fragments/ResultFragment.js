import { LINK_SELECTOR, RESULT_SELECTOR } from '../constants'

import { Fragment } from 'test-automation'

export default class ResultFragment extends Fragment {
  constructor (fragments) {
    super(fragments)

    this.setElement(LINK_SELECTOR)
    this.setElement(RESULT_SELECTOR)
  }
}
