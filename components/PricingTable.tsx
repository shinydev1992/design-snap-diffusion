interface PricingProps {
  price: string;
  credit: string;
  tag: Boolean;
}

export default function PricingTable({ price, credit, tag }: PricingProps) {
  const buyCredit = async (data: any) => {
    fetch("/api/stripe-credit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: data }),
    }).then(async (res) => {
      let resdata = await res.json();
      return window.location = resdata.data;
    }).catch((err) => {
      
    });
  }
  return (
    <>
      {tag ? (
        <div className="border-[#4C3D30] border-2 rounded-3xl bg-[#CDC0B2]">
          <div className="flex flex-col items-center ml-6 mb-6 mr-6">
            <p className="text-sm font-medium mt-2 mb-1">Most popular</p>
            <p className="text-2xl font-semibold uppercase">${price} For {credit} Credits</p>
            <p className="text-sm font-medium mt-1">{price} room designs with any theme!</p>
            <button
              className="sm:bg-[#4C3D30] bg-[#99552A] rounded-full text-white text-lg font-semibold uppercase w-full px-8 py-2 mt-4"
              onClick={()=>{
                buyCredit('1');
              }}
            >
              Buy now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold uppercase">${price} For {credit} Credits</p>
          <p className="text-sm font-medium mt-2">{price} room designs with any theme!</p>
          <button
            className="sm:bg-[#4C3D30] bg-[#99552A] rounded-full text-white text-lg font-semibold uppercase w-full px-8 py-2 mt-4"
          >
            Buy now
          </button>
        </div>
      )}
    </>
  );
}