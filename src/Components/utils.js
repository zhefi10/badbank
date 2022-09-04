import ReactTooltip from "react-tooltip";

  const formatBalance = (value) => {
    if (value >0) {
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    } else {
        return "--";
    }
}

const ToolTips = () => {

    const tooltipFormat = {
        place: "bottom",
        type: "dark",
        effect: "float",
        multiline: true,
        offset: {'top': 1, 'left': 1},
        border: false,
        backgroundColor: "gray",
        textColor: "white",
        delayHide: 10
    };

    const idTip = {
        homeTip: "Reset values", 
        createAccTip: <>Add a new <br/> account</>,
        startTip: "Get trolled",
        existAccTip: <>Access to your <br/> account</>,
        newAccTip: "Click to add account",
        depositTip: <>Add funds <br/> to your account</>,
        depositClickTip: "Click to deposit",
        depositAmountTip: "Enter dollars",
        withdrawTip: <>Draw funds out <br/> from your account</>,
        withdrawClickTip: "Click to withdraw",
        withdrawAmountTip: "Enter dollars", 
        aboutTip: "Some words",
        allDataTip: <>Full Historical <br/> transactions</>,
        noAccountTip: <>Must have an account <br/> to click this option</>, 
        exportEnabledTip: "Click to download", 
        balanceTip: <>Watch your <br/> current balance</>,
    }

    let toolTipFlags = Object.entries(idTip).map((item, idx) => {
                return (
                  <ReactTooltip key={idx} id={item[0]} {...tooltipFormat} >
                    {item[1]}
                  </ReactTooltip>
                  );
              });
          
    return (
        <>
            {toolTipFlags}
        </>
    )
};


export {formatBalance, ToolTips};