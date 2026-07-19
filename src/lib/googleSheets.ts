import { google } from "googleapis";
import { sanitizeForSheets } from "./security";

export type LeadRow = {
  name: string;
  phone: string;
  course: string;
  subject: string;
  mode: string;
  place: string;
  message: string;
};

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Google Sheets credentials are missing from environment variables.");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function appendLead(lead: LeadRow) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    throw new Error("GOOGLE_SHEET_ID is missing from environment variables.");
  }

  const sheets = getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1!A:H",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          sanitizeForSheets(lead.name),
          sanitizeForSheets(lead.phone),
          sanitizeForSheets(lead.course),
          sanitizeForSheets(lead.subject),
          sanitizeForSheets(lead.mode),
          sanitizeForSheets(lead.place),
          sanitizeForSheets(lead.message),
        ],
      ],
    },
  });
}

export async function appendNewsletterSignup(email: string) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    throw new Error("GOOGLE_SHEET_ID is missing from environment variables.");
  }

  const sheets = getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "NewsletterSignups!A:B",
    valueInputOption: "RAW",
    requestBody: {
      values: [[new Date().toISOString(), sanitizeForSheets(email)]],
    },
  });
}

export type TutorApplicationRow = {
  name: string;
  phone: string;
  email: string;
  qualification: string;
  experience: string;
  classLevels: string;
  subjects: string;
  mode: string;
  message: string;
};

export async function appendTutorApplication(application: TutorApplicationRow) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    throw new Error("GOOGLE_SHEET_ID is missing from environment variables.");
  }

  const sheets = getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "TutorApplications!A:J",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          sanitizeForSheets(application.name),
          sanitizeForSheets(application.phone),
          sanitizeForSheets(application.email),
          sanitizeForSheets(application.qualification),
          sanitizeForSheets(application.experience),
          sanitizeForSheets(application.classLevels),
          sanitizeForSheets(application.subjects),
          sanitizeForSheets(application.mode),
          sanitizeForSheets(application.message),
        ],
      ],
    },
  });
}
