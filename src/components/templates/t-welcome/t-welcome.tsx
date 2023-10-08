// StyleSheet
import styles from "./t-welcome.module.css";

// Atoms
import { A_Button, A_Text, A_Title } from "@/components/atoms";

// Molecules
import { M_ConfirmDialog, m_confirmDialog } from "@/components/molecules/m-confirm-dialog/m-confirm-dialog";

export interface I_TWelcome {
  username: string;
  handleLogout: () => void;
}

export const T_Welcome = ({ username, handleLogout }: I_TWelcome) => {
  return (
    <main className={styles.t_welcome} id="t-welcome">
      <div className={styles.t_welcome__heading}>
        <A_Text data-testid="a-text-welcome" variant="fwSb-fs16-primary">
          Bem-vindo(a) ao nosso serviço !
        </A_Text>
        <A_Title data-testid="a-title-username" variant="fwSB-fs48-lh60-lspN2-gray900">
          {username}
        </A_Title>
      </div>
      <A_Text data-testid="a-text-description" variant="fwReg-fs20-lh30-gray500" id="a-text-description">
        Queremos que você se sinta em casa e aproveite ao máximo tudo o que oferecemos. Se tiver alguma dúvida ou
        precisar de ajuda, não hesite em nos chamar. Estamos sempre prontos para tornar sua experiência conosco
        incrível. Mais uma vez, bem-vindo(a)!
      </A_Text>

      <M_ConfirmDialog />

      <A_Button
        variant="fwMd-fs16-colGray700-bgWhite"
        data-testid="a-button-logout"
        onClick={() => {
          m_confirmDialog({
            message: "Tem certeza que deseja sair ?",
            header: "Confirmation",
            icon: "pi pi-exclamation-triangle",
            accept: handleLogout,
            reject: () => null,
          });
        }}
      >
        Logout
      </A_Button>
    </main>
  );
};
