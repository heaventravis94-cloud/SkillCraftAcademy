import { Activity, SkillLevel } from "@/types/activity";

export const initialActivities: Activity[] = [
  {
    id: "1",
    title: "Basic Knife Skills",
    category: "Food and Kitchen Skills",
    subCategory: "Knife Work",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "30-45 minutes",
    suppliesList: [
      "Chef's knife",
      "Cutting board",
      "Vegetables (carrots, onions, bell peppers)",
      "Sharpening stone (optional)"
    ],
    safetyNotes: "Always cut away from your body. Keep fingers tucked while chopping. Use a stable cutting board.",
    instructions: [
      { description: "Hold the knife properly with a pinch grip on the blade", isCompleted: false },
      { description: "Practice the claw grip with your non-knife hand", isCompleted: false },
      { description: "Learn the rocking motion for chopping", isCompleted: false },
      { description: "Practice julienne cuts on carrots", isCompleted: false },
      { description: "Practice dicing onions", isCompleted: false },
      { description: "Practice removing seeds from bell peppers", isCompleted: false }
    ],
    troubleshootingTips: [
      "If your knife feels dull, try using a sharpening stone",
      "If you're struggling with even cuts, slow down and focus on technique",
      "If your cutting board is slipping, place a damp towel underneath"
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false
  },
  {
    id: "2",
    title: "How to Make Sourdough Starter",
    category: "Food and Kitchen Skills",
    subCategory: "Bread Baking and Sourdough",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "5-7 days",
    suppliesList: [
      "All-purpose or bread flour",
      "Filtered water (chlorine-free)",
      "Non-reactive container (glass or plastic)",
      "Loose-fitting lid or cloth cover",
      "Rubber band",
      "Kitchen scale (optional but recommended)"
    ],
    safetyNotes: "Use clean utensils to prevent contamination. Keep starter in a safe place away from extreme temperatures.",
    instructions: [
      { description: "Day 1: Mix 1/2 cup flour with 1/4 cup water in a clean container. Stir until no dry flour remains. Cover loosely with lid or cloth.", isCompleted: false },
      { description: "Day 2: Discard half of the starter. Add 1/2 cup flour and 1/4 cup water. Mix well. Cover loosely.", isCompleted: false },
      { description: "Day 3: Discard half of the starter. Add 1/2 cup flour and 1/4 cup water. Mix well. Cover loosely.", isCompleted: false },
      { description: "Day 4: Discard half of the starter. Add 1/2 cup flour and 1/4 cup water. Mix well. Cover loosely.", isCompleted: false },
      { description: "Day 5: Check for bubbles and a slightly sour smell. If active, begin feeding twice daily. Discard half and feed with 1/2 cup flour and 1/4 cup water.", isCompleted: false },
      { description: "Day 6: Continue twice daily feedings if starter is active. Discard half and feed with 1/2 cup flour and 1/4 cup water.", isCompleted: false },
      { description: "Day 7: Starter should be bubbly, active, and doubling in size 4-8 hours after feeding. Ready to use for baking!", isCompleted: false }
    ],
    troubleshootingTips: [
      "If starter isn't bubbling, try moving it to a warmer location (70-75°F).",
      "If starter develops a pink or orange tint, mold, or foul odor, discard and start over.",
      "If a layer of liquid (hooch) forms, stir it back in or pour it off before feeding.",
      "If starter seems sluggish, try feeding with whole wheat flour for a few days to boost activity."
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false
  },
  {
    id: "3",
    title: "Changing a Tire",
    category: "Automotive Skills",
    subCategory: "Basic Maintenance",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "20-30 minutes",
    suppliesList: [
      "Spare tire",
      "Jack",
      "Lug wrench",
      "Vehicle owner's manual",
      "Wheel wedges (optional)"
    ],
    safetyNotes: "Park on a flat surface away from traffic. Engage parking brake. Never get under a vehicle supported only by a jack.",
    instructions: [
      { description: "Find a safe location and turn on hazard lights", isCompleted: false },
      { description: "Apply parking brake and place wheel wedges if available", isCompleted: false },
      { description: "Remove hubcap or wheel cover if necessary", isCompleted: false },
      { description: "Loosen lug nuts by turning counterclockwise (don't remove completely yet)", isCompleted: false },
      { description: "Position jack under vehicle's designated jack point", isCompleted: false },
      { description: "Raise vehicle until flat tire is off the ground", isCompleted: false },
      { description: "Remove loosened lug nuts and pull tire toward you to remove", isCompleted: false },
      { description: "Mount spare tire on wheel bolts", isCompleted: false },
      { description: "Replace lug nuts and tighten by hand", isCompleted: false },
      { description: "Lower vehicle with jack and remove jack", isCompleted: false },
      { description: "Fully tighten lug nuts with wrench in a star/crisscross pattern", isCompleted: false }
    ],
    troubleshootingTips: [
      "If lug nuts are stuck, try rocking the car gently to loosen them",
      "If spare tire is flat, call for roadside assistance",
      "If you're uncomfortable changing a tire on a busy road, call for help"
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false
  },
  {
    id: "4",
    title: "Basic Sewing Stitches",
    category: "Crafts and Sewing",
    subCategory: "Hand Sewing",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "45-60 minutes",
    suppliesList: [
      "Fabric scraps",
      "Needles",
      "Thread",
      "Scissors",
      "Thimble (optional)",
      "Fabric marker or chalk"
    ],
    safetyNotes: "Be careful with needles to avoid pricks. Keep sharp tools away from children.",
    instructions: [
      { description: "Thread your needle and tie a knot at the end", isCompleted: false },
      { description: "Practice the running stitch on fabric scraps", isCompleted: false },
      { description: "Learn the backstitch for stronger seams", isCompleted: false },
      { description: "Practice the whip stitch for hemming", isCompleted: false },
      { description: "Try the blanket stitch for finishing edges", isCompleted: false },
      { description: "Learn to secure your thread with a knot", isCompleted: false }
    ],
    troubleshootingTips: [
      "If your stitches are uneven, slow down and focus on consistent spacing",
      "If thread keeps tangling, try shorter lengths of thread",
      "If fabric puckers, try using less tension when pulling stitches"
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false
  },
  {
    id: "5",
    title: "Changing Your Oil",
    category: "Automotive Skills",
    subCategory: "Basic Maintenance",
    skillLevel: SkillLevel.Intermediate,
    estimatedTime: "30-45 minutes",
    suppliesList: [
      "New oil (check owner's manual for type and amount)",
      "New oil filter",
      "Oil drain pan",
      "Socket wrench set",
      "Oil filter wrench",
      "Funnel",
      "Jack and jack stands",
      "Gloves",
      "Safety glasses"
    ],
    safetyNotes: "Never work under a vehicle supported only by a jack. Hot oil can cause burns. Dispose of old oil properly at an auto parts store or recycling center.",
    instructions: [
      { description: "Warm up engine for a few minutes (makes oil drain better)", isCompleted: false },
      { description: "Turn off engine and engage parking brake", isCompleted: false },
      { description: "Raise vehicle with jack and secure with jack stands", isCompleted: false },
      { description: "Locate oil drain plug and position drain pan underneath", isCompleted: false },
      { description: "Remove drain plug with socket wrench and let oil drain completely", isCompleted: false },
      { description: "Clean drain plug and reinstall with new gasket if needed", isCompleted: false },
      { description: "Locate oil filter and remove with filter wrench", isCompleted: false },
      { description: "Apply thin layer of new oil to new filter's rubber gasket", isCompleted: false },
      { description: "Install new filter hand-tight plus 3/4 turn", isCompleted: false },
      { description: "Lower vehicle and remove jack stands", isCompleted: false },
      { description: "Remove oil filler cap and add new oil through opening", isCompleted: false },
      { description: "Check dipstick and add oil until at proper level", isCompleted: false },
      { description: "Start engine and check for leaks", isCompleted: false },
      { description: "Turn off engine and wait 5 minutes, then check oil level again", isCompleted: false }
    ],
    troubleshootingTips: [
      "If drain plug is stuck, try tapping it gently with a hammer to loosen",
      "If you spill oil, clean it up immediately to prevent slipping",
      "If oil level is overfull, remove excess with a turkey baster"
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false
  },
  {
    id: "6",
    title: "Basic Woodworking Joints",
    category: "Crafts and Sewing",
    subCategory: "Woodworking",
    skillLevel: SkillLevel.Intermediate,
    estimatedTime: "2-3 hours",
    suppliesList: [
      "Wood pieces (pine or plywood recommended for beginners)",
      "Hand saw or miter saw",
      "Chisel set",
      "Wood glue",
      "Sandpaper (120 and 220 grit)",
      "Measuring tape",
      "Pencil",
      "Square"
    ],
    safetyNotes: "Wear safety glasses when cutting or chiseling. Keep fingers away from blades. Work in well-ventilated area when using glue.",
    instructions: [
      { description: "Measure and mark wood pieces for butt joint", isCompleted: false },
      { description: "Cut pieces to length with saw", isCompleted: false },
      { description: "Sand all pieces smooth with 120 grit then 220 grit", isCompleted: false },
      { description: "Apply glue to joint surfaces and clamp together", isCompleted: false },
      { description: "Wipe away excess glue with damp cloth", isCompleted: false },
      { description: "Measure and mark wood for miter joint (45-degree angle)", isCompleted: false },
      { description: "Cut pieces at 45-degree angles", isCompleted: false },
      { description: "Test fit pieces and adjust if necessary", isCompleted: false },
      { description: "Glue and clamp miter joint", isCompleted: false },
      { description: "Measure and mark wood for lap joint", isCompleted: false },
      { description: "Cut out material for lap joint with saw and chisel", isCompleted: false },
      { description: "Test fit and adjust as needed", isCompleted: false },
      { description: "Glue and clamp lap joint", isCompleted: false }
    ],
    troubleshootingTips: [
      "If pieces don't fit properly, make small adjustments with sandpaper",
      "If glue doesn't hold, ensure surfaces are clean and properly prepared",
      "If wood splits, pre-drill holes before inserting screws"
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false
  },
  {
    id: "7",
    title: "Programming Basics: HTML Structure",
    category: "Technology and Programming",
    subCategory: "Web Development",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "1-2 hours",
    suppliesList: [
      "Computer with internet access",
      "Text editor (VS Code, Sublime Text, or Notepad++)",
      "Web browser (Chrome, Firefox, Safari)"
    ],
    safetyNotes: "Take regular breaks to rest your eyes. Maintain good posture while working at the computer.",
    instructions: [
      { description: "Create a new folder for your project", isCompleted: false },
      { description: "Create a new file called index.html", isCompleted: false },
      { description: "Add basic HTML structure with DOCTYPE, html, head, and body tags", isCompleted: false },
      { description: "Add a title in the head section", isCompleted: false },
      { description: "Add an h1 heading in the body section", isCompleted: false },
      { description: "Add a paragraph with some text", isCompleted: false },
      { description: "Save the file and open it in a web browser", isCompleted: false },
      { description: "Add an image using the img tag", isCompleted: false },
      { description: "Create an unordered list with three items", isCompleted: false },
      { description: "Add a link to another website", isCompleted: false }
    ],
    troubleshootingTips: [
      "If your page doesn't look right, check for missing closing tags",
      "If your image doesn't show, check the file path is correct",
      "If your changes don't appear, refresh the browser"
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false
  },
  {
    id: "8",
    title: "Basic First Aid: CPR",
    category: "Health and Safety",
    subCategory: "Emergency Response",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "2-3 hours",
    suppliesList: [
      "CPR training mannequin (if available)",
      "Barrier device (face shield or pocket mask)",
      "First aid kit"
    ],
    safetyNotes: "Only perform CPR on someone who is unresponsive and not breathing normally. Call 911 before starting. Use a barrier device if available to prevent disease transmission.",
    instructions: [
      { description: "Check for responsiveness by tapping shoulders and shouting", isCompleted: false },
      { description: "Call 911 or have someone else call", isCompleted: false },
      { description: "Check for normal breathing for no more than 10 seconds", isCompleted: false },
      { description: "Position person on their back on a firm, flat surface", isCompleted: false },
      { description: "Kneel beside person's chest", isCompleted: false },
      { description: "Place heel of one hand on center of chest between nipples", isCompleted: false },
      { description: "Place heel of second hand on top of first hand", isCompleted: false },
      { description: "Interlock fingers and keep arms straight", isCompleted: false },
      { description: "Position shoulders directly over hands", isCompleted: false },
      { description: "Compress chest at least 2 inches deep at rate of 100-120 compressions per minute", isCompleted: false },
      { description: "After 30 compressions, tilt head back slightly and lift chin", isCompleted: false },
      { description: "Pinch nose closed and place mouth over person's mouth to make seal", isCompleted: false },
      { description: "Give 2 breaths, watching for chest to rise", isCompleted: false },
      { description: "Continue cycles of 30 compressions and 2 breaths", isCompleted: false }
    ],
    troubleshootingTips: [
      "If you're unsure about giving breaths, do hands-only CPR",
      "If ribs break during compressions, continue - saving a life is more important",
      "If person starts breathing normally, place in recovery position and monitor"
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false
  },
  {
    id: "9",
    title: "Basic Car Maintenance: Checking Fluids",
    category: "Automotive Skills",
    subCategory: "Basic Maintenance",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "15-20 minutes",
    suppliesList: [
      "Vehicle owner's manual",
      "Clean cloth or paper towels",
      "Funnel (optional)",
      "Appropriate fluids for your vehicle (if topping off)"
    ],
    safetyNotes: "Check fluids when engine is cool to avoid burns. Park on level ground. Keep fluids away from hot engine parts.",
    instructions: [
      { description: "Park on level ground and turn off engine", isCompleted: false },
      { description: "Open hood and locate owner's manual for fluid reservoir locations", isCompleted: false },
      { description: "Check engine oil with dipstick: pull out, wipe clean, reinsert, then pull out again to check level", isCompleted: false },
      { description: "Check coolant level in radiator or coolant reservoir", isCompleted: false },
      { description: "Check brake fluid level in master cylinder reservoir", isCompleted: false },
      { description: "Check power steering fluid level", isCompleted: false },
      { description: "Check windshield washer fluid level", isCompleted: false },
      { description: "Check transmission fluid (if applicable) with engine running and warm", isCompleted: false },
      { description: "Note any fluids that are low or look dirty", isCompleted: false }
    ],
    troubleshootingTips: [
      "If oil is low, add appropriate type slowly and recheck",
      "If fluids are consistently low, look for leaks",
      "If brake fluid is low, have brakes inspected before driving"
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false
  },
  {
    id: "10",
    title: "Basic Photography Composition",
    category: "Arts and Creative Skills",
    subCategory: "Photography",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "1-2 hours",
    suppliesList: [
      "Camera (DSLR, mirrorless, or smartphone)",
      "Subject to photograph (person, object, or landscape)"
    ],
    safetyNotes: "Be aware of your surroundings when taking photos. Respect people's privacy and property.",
    instructions: [
      { description: "Learn the rule of thirds: divide frame into 9 equal parts with 2 horizontal and 2 vertical lines", isCompleted: false },
      { description: "Position important elements along these lines or at their intersections", isCompleted: false },
      { description: "Practice leading lines: use natural lines to draw eye through photo", isCompleted: false },
      { description: "Experiment with framing: use natural frames like windows or arches", isCompleted: false },
      { description: "Try different perspectives: shoot from high above or down low", isCompleted: false },
      { description: "Practice filling the frame with your subject", isCompleted: false },
      { description: "Experiment with symmetry and patterns", isCompleted: false },
      { description: "Try the background: ensure it doesn't distract from subject", isCompleted: false }
    ],
    troubleshootingTips: [
      "If photos look boring, try changing your position",
      "If subject is too small, get closer or use zoom",
      "If background is distracting, change position or use wider aperture"
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false
  }
];