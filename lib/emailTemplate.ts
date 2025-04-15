type EmailTemplateParams = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
};

export function generateEmailTemplate({
  firstName,
  lastName,
  email,
  phone,
  companyName,
  message,
}: EmailTemplateParams): string {
  return `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 20px; background-color: #f9f9f9;">
        <div style="max-width: 600px; margin: auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
          <h1 style="text-align: center; color: #4CAF50; margin-bottom: 10px;">📬 Inboxed Mail</h1>
          <p style="text-align: center; color: #666; margin-bottom: 30px;">You received a new message from your website contact form</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="font-weight: bold; padding: 10px; background-color: #f4f4f4; width: 30%;">First Name</td>
              <td style="padding: 10px;">${firstName}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 10px; background-color: #f4f4f4;">Last Name</td>
              <td style="padding: 10px;">${lastName}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 10px; background-color: #f4f4f4;">Email</td>
              <td style="padding: 10px;">${email}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 10px; background-color: #f4f4f4;">Phone</td>
              <td style="padding: 10px;">${phone}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 10px; background-color: #f4f4f4;">Company</td>
              <td style="padding: 10px;">${companyName}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 10px; background-color: #f4f4f4;">Message</td>
              <td style="padding: 10px; white-space: pre-line;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 40px; font-size: 12px; text-align: center; color: #aaa;">This message was automatically sent from the Inboxed.ID website</p>
        </div>
      </div>
    `;
}
