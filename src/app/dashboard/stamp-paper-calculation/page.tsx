

const page = () => {

    function calculateStampDuty(state: string, propertyValue: number, gender: string) {
        // Define stamp duty rates and registration charges for each state
        const stateRates: Record<string, { stampDutyRate: number, registrationCharge: number }> = {
            'Andhra Pradesh': { stampDutyRate: 5, registrationCharge: 0.5 },
            'Arunachal Pradesh': { stampDutyRate: 6, registrationCharge: 1 },
            'Assam': { stampDutyRate: 8.25, registrationCharge: 0 },
            'Bihar': {
                stampDutyRate: (gender === 'Male' ? 5.7 :
                    (gender === 'Female' ? 6.3 : 6)),
                registrationCharge: 2
            },
            'Chhattisgarh': { stampDutyRate: 5, registrationCharge: 4 },
            'Goa': {
                stampDutyRate: propertyValue <= 500000 ? 3.5 :
                    (propertyValue <= 750000 ? 4 :
                        (propertyValue <= 10000000 ? 4.5 : 5)),
                registrationCharge: 3
            },
            'Gujarat': {
                stampDutyRate: 4.9,
                registrationCharge: (gender === 'Female' ? 0 : 1)
            },
            'Haryana': {
                stampDutyRate: (gender === 'Male' ? 7 : 5),
                registrationCharge: (propertyValue <= 50000 ? 0 : 1)
            },
            'Himachal Pradesh': { stampDutyRate: 5, registrationCharge: 2 },
            'Jammu and Kashmir': { stampDutyRate: 5, registrationCharge: 0 },
            'Jharkhand': { stampDutyRate: 4, registrationCharge: 3 },
            'Karnataka': {
                stampDutyRate: propertyValue > 4500000 ? 5 :
                    (propertyValue > 2100000 ? 3 : 2),
                registrationCharge: 1
            },
            'Kerala': { stampDutyRate: 8, registrationCharge: 2 },
            'Madhya Pradesh': { stampDutyRate: 7.5, registrationCharge: 3 },
            'Maharashtra': {
                stampDutyRate: (gender === 'Male' ? 6 : 5),
                registrationCharge: 1
            },
            'Manipur': { stampDutyRate: 7, registrationCharge: 3 },
            'Meghalaya': { stampDutyRate: 9.9, registrationCharge: 0 },
            'Mizoram': { stampDutyRate: 9, registrationCharge: 0 },
            'Nagaland': { stampDutyRate: 8.25, registrationCharge: 0 },
            'Odisha': {
                stampDutyRate: (gender === 'Male' ? 5 : 4),
                registrationCharge: 2
            },
            'Punjab': {
                stampDutyRate: (gender === 'Male' ? 7 : 5),
                registrationCharge: 1
            },
            'Rajasthan': {
                stampDutyRate: (gender === 'Male' ? 5 : 4),
                registrationCharge: 1
            },
            'Sikkim': {
                stampDutyRate: (state === 'Sikkim' ? 5 : 9),
                registrationCharge: (state === 'Sikkim' ? 1 : 0)
            },
            'Tamil Nadu': { stampDutyRate: 7, registrationCharge: 4 },
            'Telangana': { stampDutyRate: 5, registrationCharge: 0.5 },
            'Tripura': { stampDutyRate: 5, registrationCharge: 0 },
            'Uttar Pradesh': {
                stampDutyRate: (gender === 'Male' ? 7 : 7),
                registrationCharge: (propertyValue <= 10000 ? 0 : 1)
            },
            'Uttarakhand': {
                stampDutyRate: (gender === 'Male' ? 5 : 3.75),
                registrationCharge: 2
            },
            'West Bengal': {
                stampDutyRate: (propertyValue <= 10000000 ? 6 : 7),
                registrationCharge: 1
            }
        };

        // Check if the state is valid
        if (stateRates[state]) {
            const { stampDutyRate, registrationCharge } = stateRates[state];

            // Calculate stamp duty charges
            const stampDutyCharges = (propertyValue * stampDutyRate) / 100;

            // Calculate total charges (stamp duty + registration)
            const totalCharges = stampDutyCharges + registrationCharge;

            return totalCharges;
        } else {
            return 'Invalid state';
        }
    }

    return (
        <div>
            <h2 className="text-3xl font-semibold text-white tracking-wider">Stamp Duty Calculator</h2>
            <div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default page
