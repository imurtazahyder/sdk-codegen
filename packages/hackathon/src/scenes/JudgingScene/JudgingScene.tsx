/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import type { FC } from 'react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Space, Heading, Span, Icon, ButtonOutline } from '@looker/components'
import { ArrowDownward } from '@styled-icons/material/ArrowDownward'
import { isLoadingState } from '../../data/common/selectors'
import { Loading } from '../../components/Loading'
import { JudgingList } from './components'
import { getHackerState } from '../../data/hack_session/selectors'

interface JudgingSceneProps {}

export const JudgingScene: FC<JudgingSceneProps> = () => {
  const isLoading = useSelector(isLoadingState)
  const [filterJudging, setfilterJudging] = useState(true);
  const hacker = useSelector(getHackerState)

  return (
    <>
      <Space>
        <Space>
          <Heading as="h2" fontSize="xxxlarge" fontWeight="medium">
            Judgings
            {hacker.canAdmin && 
              <ButtonOutline onClick={() => setfilterJudging(!filterJudging)}>Toggle Filtering</ButtonOutline>
            }
          </Heading>
          {isLoading && <Loading message={'Processing judgings...'} />}
        </Space>
        <Span color={'inform'} style={{ whiteSpace: 'nowrap' }}>
          Judging options
        </Span>
        <Icon color={'inform'} pr="u1" icon={<ArrowDownward />} />
      </Space>
      <JudgingList filterJudging={filterJudging}/>
    </>
  )
}
