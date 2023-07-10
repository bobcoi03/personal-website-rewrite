import { NextResponse } from "next/server"

export const blogsData = {
    "joyy": {
        title: "Joyy Inc: Undervalued social media",
        dateString: "11.12.2022",
        text: [
            "Time of purchase: 21/04/2022",
            "As of 21/04/2022",
            "Market cap: $2,656,500,000",
            "Net debt: - $3,718,000,000",
            "Enterprise value: - $1,061,150,000",
            "Share price at time of purchase: $37.50",
            "Share price as of 07/07/2023: $31.00",
            `JOYY Inc is a social media company operating 
            apps like Bigo Live, which allows users to live
            stream specific moments, such as showcase talents,
            socialize and connect with other users worldwide. 
            This Bigo Live is JOYY’s biggest asset with average
            mobile monthly active users (MAUs) of 35.4 million. 
            It also owns Likee, a short form video platform which 
            has average MAUs of 50 million, and Hago a casual game
            orientated social media platform with instant messaging features
            and video calls. This app has MAUs of 7.6 million.`,
            `JOYY is extremely undervalued if you just look at the items
            on its balance sheet.`,
            `As of September 2022, JOYY had a net asset value of $5.8 billion
            with $4.2 in cash and a cash - total liabilities of $1 billion.`,
            `Revenues for the Bigo Live business in year-end 2021 was $2.4 billion 
            with a GAAP net loss of 80 million.`,
            `For reference, internet companies operating in the entertainment space often
            are valued at 1x - 5x revenues and at least 2x net asset value.`,
            `If we take into consideration that the company is selling at ~0.5x of net asset
            value, the massive cash cushion it has and the fact that it’s valued at the lower 
            end of the industry from a revenues perspective, then we can see that this business
            is being undervalued by the market. Management seems to agree with this assessment as
            they’ve announced a $1 billion dollar buyback program in November 2021. Which is 
            approximately 38% of the value of the company. In September 2019 JOYY also announced
            a $300 million buyback program, which was completed as planned a year later. 
            As well as this, on the 27th of August 2021 Reuters reported an exclusive article saying
            that management had intentions of taking the company private at a valuation of $8 
            billion, as the market price is undervaluing JOYY. Although this was taken from a private source
            , it still reinforces the valuation we’ve done today.`,
            `If we take a look at financial valuations and actions that management has taken,
            then we can come to a conclusion that the market is undervaluing the fair value of this business`,
        ],
        id: "joyy"
    },
    "rcmt": {
        title: "RCM Technologies: Mispriced mini conglomerate",
        dateString: "11.12.2022",
        id: "rcmt",
        text: [
            "Time of purchase: 03/12/2020",
            "Time of disposal: 11/02/2021",
            "As of 03/12/2020",
            "Market Cap: $19,014,492",
            "Net debt (cash & cash equivalents - total debt): $10,000,000",
            "Enterprise Value: $29,014,492",
            "Share price at time of purchase: $1.64",
            "Share price at time of disposal: $9.90",
            `
            There are a couple of things that made RCM 
            Technologies a very attractive investment at 
            a market cap of $19,014,492.
            `,
            `
            Company description, financial performance and valuation.
            `,
            "The company is a mini conglomerate, owning three unrelated businesses.",
            "1) Specialty healthcare staffing.",
            `
            This business provides healthcare staffing services, connecting 
            healthcare professionals such as therapists, nurses, caregivers,
            etc with large government entities such as the New York Board of Education.

            For the period 2012-2019 revenues in this segment grew by 19% compounded
            annually (CAGR). With revenues at the end of year 2019 at $83 million and
            producing ~$6.9 million in EBITDA(Earnings before interest, taxes, depreciation and amortization). 

            AMN, a bigger competitor, trades at ~12-14x EBITDA and is a much slower growing
            business with revenues growing at ~ 12% (CAGR) in the same period.

            Assuming a worst case scenario where the market values this segment
            at 8x EBITDA then we can assign ~$41 million to this segment.

            Base case 10x EBITDA = $69 million

            Best Case 12x EBITDA = $82 million.
            `,
            "2) Engineering services",
            "This segment provides a wide range of engineering services such as:",
            `
            Project Management Engineering & Design, Engineering Analysis, Engineer-Procure-Construct,
            Configuration Management, Hardware/Software Validation & Verification, Quality Assurance, 
            Technical Writing & Publications, Manufacturing Process Planning & Improvement and 3D/BIM Integrated Design. 
            Engineering services are provided at the site of the client or at the Company’s own facilities.

            From the period 2012-2019, sales of this segment have averaged $79 million with average EBITDA at $5.2 million.
            The reason I’ve taken average instead of looking at growth rate is the nature of this business is volatile, 
            as the timing of contracts are irregular and contract size as a percentage of revenues are quite large.

            Hill International, Inc is a competitor operating in the same industry and it currently sells at 0.75x of sales.
            Once again if we value this segment at a conservative 

            0.5x of sales we get a valuation of ~$39 million.
            `,
            " 3) IT & Life Sciences",
            `
            The Company’s Life Sciences and Information Technology segment is an integrated
            group of business units providing staff supplementation services and project solutions
            with physical locations in the United States, Canada and Puerto Rico primarily supporting
            Financial, Technical, Manufacturing, Life Sciences and Distribution applications.
            Specialization in project solutions include, but are not limited to, the following areas:
            `,
            `
            ●
            Life Sciences: Specializes in providing innovative options to pharmaceutical,
            medical device and biotechnology companies in need of guidance, support or 
            remediation of quality, compliance or business challenges. 
            The group assists in staffing, solution planning and remediation needs in
            the areas of automation, compliance, data analytics, technical quality assurance
            and management, and validation and verification.
            `,
            `
            ●
                IT Services & Solutions: Global provider of business and
                technology solutions designed to improve the operational 
                performance of our clients. Specialties include software development, 
                infrastructure services, and managed IT solutions.  
                The Company has a 40-year history of providing qualified IT candidates
                to customers in a timely and cost-effective manner to address their 
                specific business needs. The Company offers scalable solutions 
                that can provide emerging growth companies with a single qualified 
                resource or an entire project team along with RCM’s project management
                oversight to Fortune 100 clients
            `,
            `
            This segment’s revenues have been declining YoY
            for the period 2012-2019 and over that time frame
            has an average EBIT of ~$1.59 million.
            `,
            `
            For the sake of simplification I’ll assign $0 
            to this business segment.
            `,
            `
            In combination.
            `,
            "Valuation cases.",
            "Worse case: $70 million (41 + 39 - 10)",
            "Base case: $98 million (69 + 39 - 10)",
            "Best case: $111 million (82 + 39 - 10)",
            "Large Insider buying",
            `
            In early June 2020, the company, the CEO, CFO, and a 
            board member purchased a block of just under 3mm shares
            of RCMT from M2O, the family office that had previously 
            been the largest shareholder of the company (and a backer
            of the CEO’s activism on the company).  RCMT repurchased
            1.86mm shares, the CEO purchased 850k shares, the CFO purchased
            150k shares, and a board member purchased 100k shares.  
            The price for all purchases was $1.20 per share.
            These are possible signs that management thinks that the 
            company is of a good value at this price range.
            `,
            `
            So here we have a business that has no risk of bankruptcy
            or material decline in the value of the company, selling
            at a worse case scenario of 28% of the actual value of the company.

            There’s also consensus action from management confirming 
            the undervaluation as they’ve purchased roughly 27% of the company.

            These actions reinforce the valuations that I’ve made 
            and the potential return here is more than 260%, depending on
            the timeframe that the market will revalue this business to a more
            appropriate level that reflects the fair value of the business.
            `
        ]
    }
}

export async function GET(request) {
    console.log(request)
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    return NextResponse.json( blogsData[id] )
}