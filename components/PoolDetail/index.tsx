import styled from 'styled-components'
import StakeNClaimSecond from "../StakeNClaimSecond"

const Wrapper = styled.div`

`

const Title = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #FBFCFD;
  text-align: center;
`
const PoolDetail = ({
    from,
    to,
    fromImage,
    toImage
}) => {
    return (
        <Wrapper>
            <Title style={{display: 'flex', gap: '24px'}}>
                <div style={{display: 'flex', gap: '10px'}}>
                {fromImage()} <span>-</span> {typeof toImage === 'string' ? <img src={`${toImage}`} /> : toImage()}
                </div>
                <Title>{from}-{to} Pool</Title>
            </Title>
            <StakeNClaimSecond
                handleBurnMinus={() => console.log('hello')}
                onBurnChange={() => console.log('hello')}
                handleBurnPlus={() => console.log('hello')}
                handleFotStaking={() => console.log('hello')}
                handleFotStakingUnstake={() => console.log('hello')}
                handleFotStakingClaimReward={() => console.log('hello')}
            />
        </Wrapper>
    )
}

export default PoolDetail