



const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function checkoutDevice(ledger, assetTag, borrower) {
  if (!ledger[assetTag]) {
    return {
      ledger,
      message: `Device with asset tag ${assetTag} was not found.`
    };
  }

  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger,
      message: `Device with asset tag ${assetTag} is already checked out.`
    };
  }

  const updatedLedger = JSON.parse(JSON.stringify(ledger));
  updatedLedger[assetTag].borrower = {
    name: borrower.name,
    email: borrower.email
  };
  updatedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} successfully checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {
  if (!ledger[assetTag]) {
    return {
      ledger,
      message: `Device with asset tag ${assetTag} was not found.`
    };
  }

  const updatedLedger = JSON.parse(JSON.stringify(ledger));
  updatedLedger[assetTag].borrower = {
    name: "",
    email: ""
  };
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} successfully checked in.`
  };
}

function parseDateComponents(dateStr) {
  const parts = dateStr.split("/");
  return {
    month: Number(parts[0]),
    day: Number(parts[1]),
    year: Number(parts[2])
  };
}

function isBefore(dateStr1, dateStr2) {
  const d1 = parseDateComponents(dateStr1);
  const d2 = parseDateComponents(dateStr2);

  if (d1.year !== d2.year) return d1.year < d2.year;
  if (d1.month !== d2.month) return d1.month < d2.month;
  return d1.day < d2.day;
}

function listOverdueDevices(ledger, today) {
  const overdueDevices = [];

  for (const key in ledger) {
    const device = ledger[key];
    if (device.status === "CheckedOut" && device.dueDate) {
      if (isBefore(device.dueDate, today)) {
        overdueDevices.push(device);
      }
    }
  }

  overdueDevices.sort((a, b) => {
    if (isBefore(a.dueDate, b.dueDate)) return -1;
    if (isBefore(b.dueDate, a.dueDate)) return 1;
    return 0;
  });

  return overdueDevices;
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}


    
