"use client";
import React, { useState, useEffect, useRef } from "react";

const TermsAndConditions: React.FC = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const element = contentRef.current;
    if (!element) return;

    const scrollBottom =
      element.scrollHeight - element.scrollTop - element.clientHeight;
    if (scrollBottom < 1) {
      setIsButtonActive(true);
    }
  };

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        ref={contentRef}
        className="overflow-y-scroll h-96 w-3/4 p-4 border border-gray-300 rounded-lg"
        onScroll={handleScroll}
      >
        Note to Investigators: When creating informed consent letters,
        investigators are encouraged to keep language and vocabulary as basic
        and straightforward as possible. Investigators are also encouraged to
        use this template when creating informed consent letters. Use of
        alternative wording or format is permitted, but doing so may slow down
        the review process. All sections of the consent form, except the
        "Consent" section, should be written in second person ("You are
        invited..."). Headers should include “Informed Consent” followed by the
        title of the study (e.g., the header in this document). Footers should
        include page numbers. If your consent letter is more than one page, the
        footer should also include a space for the participant’s initials (e.g.,
        the footer in this document). Be sure to include any basic components of
        informed consent that are appropriate to your study. If components apply
        to your study, they must be included. Please refer to the document
        entitled “components of informed consent” for more information. If you
        have any further questions, contact the Director of Institutional
        Research at (865) 354-3000, ext. 4822. **Information in italics is for
        your information and should be deleted from the actual consent form.
        Material in brackets should be completed with relevant information.**
        TITLE OF STUDY [Insert title] PRINCIPAL INVESTIGATOR [Name] [Department]
        [Address] [Phone] [Email] PURPOSE OF STUDY You are being asked to take
        part in a research study. Before you decide to participate in this
        study, it is important that you understand why the research is being
        done and what it will involve. Please read the following information
        carefully. Please ask the researcher if there is anything that is not
        clear or if you need more information. The purpose of this study is to
        [Briefly describe purpose of study.] STUDY PROCEDURES List all
        procedures, preferably in chronological order, which will be employed in
        the study. Point out any procedures that are considered experimental.
        Clearly explain technical and medical terminology using non-technical
        language. Explain all procedures using language that is appropriate for
        the expected reading level of participants. State the amount of time
        required of participants per session, if applicable, and for the total
        duration of the study. If audio taping, videotaping, or film procedures
        are going to be used, provide information about the use of these
        products. RISKS List all reasonably foreseeable risks, if any, of each
        of the procedures to be used in the study, and any measures that will be
        used to minimize the risks. You may decline to answer any or all
        questions and you may terminate your involvement at any time if you
        choose. BENEFITS List the benefits you anticipate will be achieved from
        this research. Include benefits to participants, others, or the body of
        knowledge. If there is no direct benefit to the participant, state so.
        For example, “There will be no direct benefit to you for your
        participation in this study. However, we hope that the information
        obtained from this study may….” When applicable, disclose alternative
        procedures or courses of treatment, if any, which might be advantageous
        to participants. CONFIDENTIALITY Your responses to this [survey] will be
        anonymous. Please do not write any identifying information on your
        [survey]. OR For the purposes of this research study, your comments will
        not be anonymous. Every effort will be made by the researcher to
        preserve your confidentiality including the following: [State measures
        taken to ensure confidentiality, such as those listed below: • Assigning
        code names/numbers for participants that will be used on all research
        notes and documents • Keeping notes, interview transcriptions, and any
        other identifying participant information in a locked file cabinet in
        the personal possession of the researcher.] Participant data will be
        kept confidential except in cases where the researcher is legally
        obligated to report specific incidents. These incidents include, but may
        not be limited to, incidents of abuse and suicide risk. COMPENSATION If
        there is no compensation, delete this section. Indicate what
        participants will receive for their participation in this study.
        Indicate other ways participants can earn the same amount of credit or
        compensation. State whether participants will be eligible for
        compensation if they withdraw from the study prior to its completion. If
        compensation is pro-rated over the period of the participant's
        involvement, indicate the points/stages at which compensation changes
        during the study. CONTACT INFORMATION If you have questions at any time
        about this study, or you experience adverse effects as the result of
        participating in this study, you may contact the researcher whose
        contact information is provided on the first page. If you have questions
        regarding your rights as a research participant, or if problems arise
        which you do not feel you can discuss with the Primary Investigator,
        please contact the Institutional Review Board at (865) 354-3000, ext.
        4822. VOLUNTARY PARTICIPATION Your participation in this study is
        voluntary. It is up to you to decide whether or not to take part in this
        study. If you decide to take part in this study, you will be asked to
        sign a consent form. After you sign the consent form, you are still free
        to withdraw at any time and without giving a reason. Withdrawing from
        this study will not affect the relationship you have, if any, with the
        researcher. If you withdraw from the study before data collection is
        completed, your data will be returned to you or destroyed. Note: Please
        delineate the "Consent" section of the Informed Consent Form by drawing
        a line across the page (like the one above this paragraph). This
        delineation is important because the consent form grammar shifts from
        second person to first person, as shown in this example. CONSENT I have
        read and I understand the provided information and have had the
        opportunity to ask questions. I understand that my participation is
        voluntary and that I am free to withdraw at any time, without giving a
        reason and without cost. I understand that I will be given a copy of
        this consent form. I voluntarily agree to take part in this study.
        <p>Your informed consent text here...</p>
      </div>
      <button
        className={`mt-4 px-6 py-2 rounded text-white font-bold ${
          isButtonActive ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500"
        }`}
        disabled={!isButtonActive}
      >
        Agree
      </button>
    </div>
  );
};

export default TermsAndConditions;
