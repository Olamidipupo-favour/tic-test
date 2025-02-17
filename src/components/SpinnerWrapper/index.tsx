import SpinnerIcon from '../../assets/img/Logo-white.png'

const SpinnerWrapper:React.FC = () => {
    return(
        <div className="h-screen fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,.9)] w-full">
            <img src={SpinnerIcon} className="animate-pulse h-20 w-20" alt="spinner-logo"/>
        </div>
    )
}
export default SpinnerWrapper