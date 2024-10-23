const { default: PaymentNotice } = _PaymentNotice;
const { default: paymentData } = _paymentData;
const BaseExample = () => {
  return <PaymentNotice data={paymentData} />;
};

render(<BaseExample />);
